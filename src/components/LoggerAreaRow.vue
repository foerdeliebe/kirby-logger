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
                <k-button-group layout="collapsed">
                    <k-button 
                        variant="filled" 
                        :icon="toggleIcon" 
                        v-on:click="toggleActive()" 
                        v-if="log.oldData != '' && log.newData != '-'"
                    >
                        {{ toggleLabel }}
                    </k-button>
                    <k-button 
                        variant="filled" 
                        icon="user" 
                        :link="`${baseUrl}/panel/users/${log.slug}`" 
                        v-if="log.type === 'user'"
                    >
                        {{ showUserLabel }}
                    </k-button>
                </k-button-group>

                <k-button-group >
                    
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
            toggleIcon: 'add',
            showUserLabel: 'Show user',
            baseUrl: window.panel.urls.site,
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