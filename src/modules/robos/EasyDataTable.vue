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
    import Vue3EasyDataTable from 'vue3-easy-data-table';
    import 'vue3-easy-data-table/dist/style.css';

    
    const EasyDataTable = defineComponent({
        name: 'EasyDataTable',
        setup() {
            const headers: Header[] = [
                { text: 'Name', value: 'name' },
                { text: 'Height (cm)', value: 'height', sortable: true },
                { text: 'Weight (kg)', value: 'weight', sortable: true },
                { text: 'Age', value: 'age', sortable: true }
            ];

            const items: Item[] = [
                { 'name': 'Curry', 'height': 178, 'weight': 77, 'age': 20 },
                { 'name': 'James', 'height': 180, 'weight': 75, 'age': 21 },
                { 'name': 'Jordan', 'height': 181, 'weight': 73, 'age': 22 }
            ];

            return {
                headers,
                items
            };
        },

    });

    export default EasyDataTable;
</script>