<template>
    <AppLayout>
        <AppCard>
            <template #title>
                <CardTitleText>New Page</CardTitleText>
            </template>

            <template #content>
                New Page
            </template>
        </AppCard>
    </AppLayout>
</template>

<script setup lang="ts">
    import AppLayout from '@/views/layouts/AppLayout.vue'
</script>
