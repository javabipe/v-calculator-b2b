<template>
    <div class="view view--centered">
        <EasyDataTable
            :headers="headers"
            :items="items"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from '@vue/composition-api';
    import type { Header, Item } from 'vue3-easy-data-table';

    const CustomizeDisplayData = defineComponent({
        setup() {
            const headers: Header[] = [];

            const items: Item[] = [];

            return {
                headers,
                items
            };
        },
    });
    export default CustomizeDisplayData;
</script>
