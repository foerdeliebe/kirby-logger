<template>
  <k-inside class="k-logger-view">
    <k-header>
      {{ $t('michnhokn.logger.title') }}
      <k-button-group slot="left">
        <k-button icon="refresh" @click="reset">{{ $t('michnhokn.logger.reset') }}</k-button>
      </k-button-group>
      <template slot="right">
        
      </template>
    </k-header>

    <k-grid gutter="medium">
      <k-column width="2/6">
        <k-select-field v-model="filter.user"
                        :options="userOptions"
                        :label="$t('user')"
                        type="select"
                        icon="angle-down"/>
      </k-column>
      <k-column width="1/6">
        <k-date-field v-model="filter.timestamp"
                      display="YYYY-MM-DD"
                      :label="$t('date')"
                      :calendar="true"
                      type="date"/>
      </k-column>
      <k-column width="1/6">
        <k-select-field v-model="filter.type"
                        :options="typeOptions"
                        :label="$t('michnhokn.logger.type')"
                        type="select"
                        icon="angle-down"/>
      </k-column>
      <k-column width="1/6">
        <k-select-field v-model="filter.action"
                        :options="actionOptions"
                        :label="$t('michnhokn.logger.action')"
                        type="select"
                        icon="angle-down"/>
      </k-column>
      <k-column width="1/7">
        <k-select-field v-model="filter.language"
                        :options="languageOptions"
                        :label="$t('language')"
                        type="select"
                        icon="angle-down"/>
      </k-column>
      <k-column width="1/3">
        <k-text-field v-model="filter.slug"
                      type="text"
                      :label="$t('michnhokn.logger.slug')"
                      placeholder="Suche ..."
                      icon="search"/>
      </k-column>
      <k-column width="2/3">
        <k-text-field v-model="filter.searchData"
                      type="text"
                      :label="$t('michnhokn.logger.searchData')"
                      :placeholder="$t('search')"
                      icon="search"/>
      </k-column>
      <k-column width="1/1">
        <div class="k-table" v-if="logs.length">
          <table>
            <thead>
            <tr>
              <th>{{ $t('date') }}</th>
              <th>{{ $t('user') }}</th>
              <th>{{ $t('michnhokn.logger.type') }}</th>
              <th>{{ $t('michnhokn.logger.action') }}</th>
              <th>{{ $t('michnhokn.logger.slug') }}</th>
              <th>{{ $t('language') }}</th>
              <th></th>
            </tr>
            </thead>
            <template v-for="log in logs">
              <LoggerAreaRow :log="log" :key="log.id"/>
            </template>
          </table>
          <k-pagination
            class="k-table-pagination"
            :details="true"
            :page="page"
            :limit="limit"
            :total="total"
            @paginate="paginate"/>
        </div>
        <k-empty v-else icon="table" layout="cards">{{ $t('michnhokn.logger.empty') }}</k-empty>
      </k-column>
    </k-grid>
  </k-inside>
</template>

<script>
import CodeDiff from 'v-code-diff'
import LoggerAreaRow from './LoggerAreaRow.vue'

export default {
  name: 'LoggerArea',
  props: ['userOptions', 'typeOptions', 'actionOptions', 'languageOptions'],
  data() {
    return {
      logs: [],
      total: 0,
      page: 1,
      limit: 20,
      filter: {
        timestamp: '',
        searchData: '',
        action: '',
        type: '',
        user: '',
        slug: '',
        language: '',
      },
    };
  },
  components: {
    LoggerAreaRow,
  },
  beforeCreate() {
    window.panel.app.$root.constructor.use(CodeDiff, {});
  },
  mounted() {
    this.fetch(this.page, this.limit);
  },
  watch: {
    filter: {
      handler(filter) {
        this.fetch(this.page, this.limit, filter);
      },
      deep: true,
    },
  },
  methods: {
    fetch(page = 1, limit = 10, filter = null) {
      return this.$api.post('logs.json', {page, limit, filter}).then((data) => {
        this.logs = data.logs;
        this.total = data.total;
      });
    },

    paginate({page, limit}) {
      this.page = page;
      this.limit = limit;
      this.fetch(page, limit);
    },

    reset() {
      this.filter = {
        timestamp: '',
        oldSearch: '',
        newSearch: '',
        action: '',
        type: '',
        user: '',
        slug: '',
        language: '',
      };
    },
  },
};
</script>
