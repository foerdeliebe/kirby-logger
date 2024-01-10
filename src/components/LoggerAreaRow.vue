<template>
    <tbody>
        <tr>
            <td>{{ log.timestamp }}</td>
            <td>{{ log.user }}</td>
            <td>{{ log.type }}</td>
            <td>{{ log.action }}</td>
            <td>{{ log.slug }}</td>
            <td>{{ log.language }}</td>
            <td>
                <k-button-group layout="collapsed" v-if="log.oldData != '' && log.newData != '-'">
                    <k-button variant="filled" :icon="toggleIcon" v-on:click="toggleActive()">
                        {{ toggleLabel }}
                    </k-button>
                </k-button-group>

                <k-button-group v-else>
                    <k-button variant="filled" :icon="toggleIcon" disabled>
                        {{ toggleLabel }}
                    </k-button>
                </k-button-group>
            </td>
        </tr>
        <tr v-if="isActive">
            <td colspan="7">
            <code-diff
                :old-string="log.oldData"
                :new-string="log.newData"
                output-format="side-by-side"
                language="json"
                context="3"
                trim="true"
                v-if="log.oldData != '' && log.newData != '-'"
            />
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
    name: 'LoggerAreaRow',
    props: ['log'],
    data() {
        return {
            isActive: false,
            toggleLabel: 'Show diff',
            toggleIcon: 'add'
        }
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;

            if (this.isActive) {
                this.toggleLabel = 'Hide diff';
                this.toggleIcon = 'remove';
            } else {
                this.toggleLabel = 'Show diff';
                this.toggleIcon = 'add';
            }
        }
    }
}
</script>