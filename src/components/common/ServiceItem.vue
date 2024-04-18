<template>
  <v-dialog max-width="500">
    <template v-slot:activator="{ props: activatorProps }">
      <div class="serviceButton" v-bind="activatorProps">
        <Component :is="serviceIcon" />
        {{ serviceTitle }}
      </div>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card :title="serviceTitle">
        <v-card-text> Эта услуга пока недоступна =( </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn class="closeButton" text="Закрыть" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  props: ['serviceTitle', 'serviceIcon']
}
</script>

<style scoped lang="scss">
.serviceButton {
  padding: 10px 24px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid $colorThemeDark;
  border-radius: 4px;
  cursor: pointer;
}
.closeButton {
  right: 10px;
  font-family: 'Proxima Nova';
  text-transform: capitalize;
  padding: 4px 10px;
}
</style>
