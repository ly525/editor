<template>
  <div :class="['setting-content', $store.state.editor.isFTextSet ?
   'setting-show' : '', 'page-setting']" :style="{width: setForm.width+'px', }" >
    <form-setting :setForm="Object.assign(setForm, {place: '单行文本',noReauired:0,
     dragName, dragActive,})"
     :dragForm="dragForm">
      <template slot="setting">
        <location-setting  :locationForm="{location: dragForm.location, size: dragForm.size,
        dragName, dragActive, hDisabled: true,
        minW: 30}"></location-setting>
      </template>
    </form-setting>
  </div>
</template>

<script>
import formSetting from '@/components/editor/dragSetting/formSetting/formSetting';
import locationSetting from '@/components/editor/dragSetting/formSetting/common/locationSetting';

export default {
  name: 'fTextSetting',
  props: {
    dragForm: Object,
    setForm: Object,
  },
  components: {
    formSetting,
    locationSetting,
  },
  data() {
    return {
      dragName: 'dragFormTexts',
      dragActive: 'fTextActive',
    };
  },
  methods: {
  },
};
</script>

<style lang="less" scoped>
</style>
