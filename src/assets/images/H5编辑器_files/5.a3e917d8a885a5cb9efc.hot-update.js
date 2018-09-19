webpackHotUpdate(5,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/editor/dragSetting/dragAudioSetting.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/editor/dragSetting/dragAudioSetting.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_chenlizhou_myweb_myVue_h5_weditor_node_modules_babel_runtime_helpers_builtin_es6_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty */ \"./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ \"./node_modules/core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_editor_dragSetting_upload_audioUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/editor/dragSetting/upload/audioUpload */ \"./src/components/editor/dragSetting/upload/audioUpload.vue\");\n/* harmony import */ var _util_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/util/tools */ \"./src/util/tools.js\");\n/* harmony import */ var _util_dragMxi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/util/dragMxi */ \"./src/util/dragMxi.js\");\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mixins: [Object(_util_dragMxi__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()],\n  name: 'DragSetting',\n  props: {\n    dragForm: Object,\n    setForm: Object\n  },\n  components: {\n    audioUplaod: _components_editor_dragSetting_upload_audioUpload__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  data: function data() {\n    return {\n      isUpload: false,\n      location: {\n        xmin: 0,\n        ymin: 0\n      },\n      size: {\n        wmin: 0,\n        hmin: 0\n      },\n      mediaSource: {\n        accept: '.mp3'\n      },\n      lastCont: ''\n    };\n  },\n  methods: {\n    audioSourceChange: function audioSourceChange(type) {\n      this.$emit('audioSourceChange', type, 'dragAudios', 'audioActive');\n    },\n    settingClose: function settingClose() {\n      // 关闭设置\n      this.$store.commit('editor_update', {\n        isAudioSet: false\n      });\n    },\n    locationChange: function locationChange() {\n      // 位置值发生改变\n      this.$emit('input-locationChange', 'dragAudios', this.dragForm.location, 'audioActive');\n    },\n    sizeChange: function sizeChange() {\n      // 大小值发生改变\n      this.$emit('input-sizeChange', 'dragAudios', this.dragForm.size, 'audioActive');\n    },\n    uploadDone: function uploadDone(file) {\n      this.onFileSuccess(file, 'dragAudios', 'audioActive');\n    },\n    fileRemove: function fileRemove() {\n      this.mediaSource.name = '';\n      this.audioChange({\n        isUplaod: false,\n        title: '',\n        url: '',\n        second: 0,\n        duration: '00:00',\n        loop: false\n      }, this, 'dragAudios', 'videoActive', true);\n    },\n    onFileSuccess: function onFileSuccess(file, dragList, active) {\n      this.$refs.audioLoad.setAttribute('src', file.url);\n      var ele = this;\n      this.$refs.audioLoad.addEventListener('loadedmetadata', function cb() {\n        var beforeName = file.beforeName ? file.beforeName : file.name;\n        var name = ele.dragForm.sourceType === '1' ? beforeName : file.url;\n        ele.mediaSource = {\n          name: name\n        };\n        var se = this.duration;\n        var play = {\n          title: name,\n          url: file.url,\n          second: se,\n          duration: Object(_util_tools__WEBPACK_IMPORTED_MODULE_4__[\"formatSecond\"])(se),\n          isUplaod: true,\n          loop: false\n        };\n        var playObj = {\n          play: play\n        };\n\n        if (ele.dragForm.sourceType === '2') {\n          playObj = {\n            linePlay: play\n          };\n        }\n\n        ele.audioChange(playObj, ele, dragList, active);\n\n        if (ele.dragForm.sourceType === '1') {\n          ele.$message({\n            message: '音频上传成功～',\n            type: 'success',\n            duration: 2000\n          });\n          ele.$refs.mediaUpload.uplaodDone(true);\n        } else {\n          ele.$message({\n            message: '在线音频访问成功～',\n            type: 'success',\n            duration: 2000\n          });\n        }\n      });\n      this.$refs.audioLoad.addEventListener('error', function () {\n        if (ele.dragForm.sourceType === '2') {\n          ele.onFileError('资源不存在或已经损坏，请重试～');\n          ele.mediaChange({}, ele, dragList, active, true);\n        } else {\n          ele.onFileError();\n          ele.mediaChange({}, ele, dragList, active, true);\n        }\n      });\n    },\n    audioChange: function audioChange(play, ele, dragList, active, isRemove) {\n      var lists = ele.$store.state.editor[dragList];\n      var drags = lists[ele.$store.state.editor[active]];\n      drags = Object.assign({}, drags, play);\n\n      if (!isRemove) {\n        drags.location = {\n          x: 0,\n          y: 0\n        };\n        drags.isUpload = true;\n      } else {\n        drags.isUpload = false;\n      }\n\n      lists[ele.$store.state.editor[active]] = drags;\n      ele.$store.commit('editor_update', Object(_Users_chenlizhou_myweb_myVue_h5_weditor_node_modules_babel_runtime_helpers_builtin_es6_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, dragList, lists));\n      setTimeout(function () {\n        drags.isUpload = true;\n        lists[ele.$store.state.editor[active]] = drags;\n        ele.$store.commit('editor_update', Object(_Users_chenlizhou_myweb_myVue_h5_weditor_node_modules_babel_runtime_helpers_builtin_es6_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, dragList, lists));\n      }, 100);\n    },\n    onFileError: function onFileError(msg) {\n      // 图片上传失败\n      this.fileFail = true;\n      this.fileAble = false;\n      var message = msg || '音频上传失败，请重试～';\n      this.$message({\n        message: message,\n        type: 'error',\n        duration: 2000\n      });\n      if (!msg) this.$refs.mediaUpload.uplaodDone(true);\n    },\n    positionChange: function positionChange() {\n      var maxBottom = this.$store.state.page.screenHeight - this.dragForm.size.h;\n\n      if (this.dragForm.location.y > maxBottom) {\n        var location = this.dragForm.location;\n        location.y = maxBottom;\n        this.$emit('input-locationChange', 'dragAudios', location, 'audioActive');\n      }\n    },\n    lineSourceBlur: function lineSourceBlur() {\n      var val = this.dragForm.linePlay.url;\n      if (this.lastCont && this.lastCont === val) return false;\n      this.lastCont = val;\n\n      if (val) {\n        if (this.dragForm.lineVideo && this.dragForm.lineVideo.url && this.dragForm.lineVideo.url === val) return false;\n        this.onFileSuccess({\n          url: val\n        }, 'dragAudios', 'audioActive');\n      } else {\n        this.setVideoInit(null, true);\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZWRpdG9yL2RyYWdTZXR0aW5nL2RyYWdBdWRpb1NldHRpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kcmFnQXVkaW9TZXR0aW5nLnZ1ZT9mMzAzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIDpjbGFzcz1cIlsnc2V0dGluZy1jb250ZW50JywgJHN0b3JlLnN0YXRlLmVkaXRvci5pc0F1ZGlvU2V0ID8gJ3NldHRpbmctc2hvdycgOiAnJ11cIlxuICAgIDpzdHlsZT1cInt3aWR0aDogc2V0Rm9ybS53aWR0aCsncHgnXG4gICAgfVwiPlxuICA8ZGl2IGNsYXNzPVwic2V0dGluZy1ib3hcIj5cbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZy10aXRsZVwiPlxuICAgICAgPHNwYW4+57uE5Lu26K6+572uPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJoZWFkZXItYnRuXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJlbC1pY29uLWNsb3NlXCIgQGNsaWNrPVwic2V0dGluZ0Nsb3NlXCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5nXCI+XG4gICAgICA8ZWwtZm9ybSByZWY9XCJmb3JtXCIgPlxuICAgICAgICA8ZWwtZm9ybS1pdGVtIGxhYmVsPVwi57G75Z6L77yaXCIgc2l6ZT1cIm1pbmlcIj5cbiAgICAgICAgICA8ZWwtcmFkaW8gdi1tb2RlbD1cImRyYWdGb3JtLnNvdXJjZVR5cGVcIiBsYWJlbD1cIjFcIlxuICAgICAgICAgICAgQGNoYW5nZT1cImF1ZGlvU291cmNlQ2hhbmdlKCcxJylcIj7mnKzlnLDkuIrkvKA8L2VsLXJhZGlvPlxuICAgICAgICAgIDxlbC1yYWRpbyB2LW1vZGVsPVwiZHJhZ0Zvcm0uc291cmNlVHlwZVwiIGxhYmVsPVwiMlwiXG4gICAgICAgICAgICBAY2hhbmdlPVwiYXVkaW9Tb3VyY2VDaGFuZ2UoJzInKVwiPuWcqOe6v+mfs+mikTwvZWwtcmFkaW8+XG4gICAgICAgIDwvZWwtZm9ybS1pdGVtPlxuICAgICAgICA8ZWwtZm9ybS1pdGVtIHYtaWY9XCJkcmFnRm9ybS5zb3VyY2VUeXBlID09PSAnMSdcIiBsYWJlbD1cIuS4iuS8oOmfs+mike+8mlwiIHNpemU9XCJtaW5pXCI+XG4gICAgICAgICAgPGF1ZGlvLXVwbGFvZCA6c291cmNlPVwibWVkaWFTb3VyY2VcIiBAdXBsb2FkLWRvbmU9XCJ1cGxvYWREb25lXCJcbiAgICAgICAgICBAZmlsZS1yZW1vdmU9XCJmaWxlUmVtb3ZlXCIgcmVmPVwibWVkaWFVcGxvYWRcIi8+XG4gICAgICAgIDwvZWwtZm9ybS1pdGVtPlxuICAgICAgICA8ZWwtZm9ybS1pdGVtIHYtaWY9XCJkcmFnRm9ybS5zb3VyY2VUeXBlID09PSAnMSdcIiBsYWJlbD1cIuagh+mimO+8mlwiIHNpemU9XCJtaW5pXCIgY2xhc3M9XCJhdWRpby1lbFwiPlxuICAgICAgICAgIDxlbC1pbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJkcmFnRm9ybS5wbGF5LnRpdGxlXCJcbiAgICAgICAgICAgOmRpc2FibGVkPVwiIWRyYWdGb3JtLnBsYXkudXJsXCI+PC9lbC1pbnB1dD5cbiAgICAgICAgPC9lbC1mb3JtLWl0ZW0+XG4gICAgICAgIDxlbC1mb3JtLWl0ZW0gdi1pZj1cImRyYWdGb3JtLnNvdXJjZVR5cGUgPT09ICcyJ1wiIGxhYmVsPVwi6Z+z6aKR6ZO+5o6l77yaXCIgc2l6ZT1cIm1pbmlcIiBjbGFzcz1cImF1ZGlvLWVsXCI+XG4gICAgICAgICAgPGVsLWlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImRyYWdGb3JtLmxpbmVQbGF5LnVybFwiIEBibHVyPVwibGluZVNvdXJjZUJsdXJcIj48L2VsLWlucHV0PlxuICAgICAgICA8L2VsLWZvcm0taXRlbT5cbiAgICAgICAgPGVsLWZvcm0taXRlbSB2LWlmPVwiZHJhZ0Zvcm0uc291cmNlVHlwZSA9PT0gJzInXCIgbGFiZWw9XCLmoIfpopjvvJpcIiBzaXplPVwibWluaVwiIGNsYXNzPVwiYXVkaW8tZWxcIj5cbiAgICAgICAgICA8ZWwtaW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwiZHJhZ0Zvcm0ubGluZVBsYXkudXJsXCJcbiAgICAgICAgICAgOmRpc2FibGVkPVwiIWRyYWdGb3JtLmxpbmVQbGF5LnVybFwiPjwvZWwtaW5wdXQ+XG4gICAgICAgIDwvZWwtZm9ybS1pdGVtPlxuICAgICAgICA8ZWwtZm9ybS1pdGVtIGxhYmVsPVwi5b6q546v77yaXCIgc2l6ZT1cIm1pbmlcIj5cbiAgICAgICAgICA8ZWwtY2hlY2tib3ggdi1tb2RlbD1cImRyYWdGb3JtLmxvb3BcIj7lvIDlkK/lvqrnjq/mkq3mlL48L2VsLWNoZWNrYm94PlxuICAgICAgICA8L2VsLWZvcm0taXRlbT5cbiAgICAgICAgPGVsLWZvcm0taXRlbSBsYWJlbD1cIuS9jee9ru+8mlwiIHNpemU9XCJtaW5pXCI+XG4gICAgICAgICAgPGVsLWlucHV0LW51bWJlciB2LW1vZGVsPVwiZHJhZ0Zvcm0ubG9jYXRpb24ueFwiIEBibHVyPVwibG9jYXRpb25DaGFuZ2VcIlxuICAgICAgICAgICAgOm1pbj1cImxvY2F0aW9uLnhtaW5cIiA6bWF4PVwiKCRzdG9yZS5zdGF0ZS5wYWdlLnBob25lV2lkdGgtZHJhZ0Zvcm0uc2l6ZS53KVwiXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhZHJhZ0Zvcm0uaXNVcGxvYWRcIiBjb250cm9scy1wb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIGNsYXNzPVwibnVtLWlucHV0XCI+PC9lbC1pbnB1dC1udW1iZXI+XG4gICAgICAgICAgPGVsLWlucHV0LW51bWJlciB2LW1vZGVsPVwiZHJhZ0Zvcm0ubG9jYXRpb24ueVwiIEBibHVyPVwibG9jYXRpb25DaGFuZ2VcIlxuICAgICAgICAgICAgOm1pbj1cImxvY2F0aW9uLnltaW5cIiA6bWF4PVwieU1heFwiXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhZHJhZ0Zvcm0uaXNVcGxvYWRcIiBjb250cm9scy1wb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgIGNsYXNzPVwibnVtLWlucHV0XCI+PC9lbC1pbnB1dC1udW1iZXI+XG4gICAgICAgIDwvZWwtZm9ybS1pdGVtPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGVjLWxhYmVsXCI+IDxsYWJlbD5YPC9sYWJlbD4gPGxhYmVsPiBZPC9sYWJlbD48L2Rpdj5cbiAgICAgICAgPGVsLWZvcm0taXRlbSBsYWJlbD1cIuWwuuWvuO+8mlwiIHNpemU9XCJtaW5pXCI+XG4gICAgICAgICAgPGVsLWlucHV0LW51bWJlciB2LW1vZGVsPVwiZHJhZ0Zvcm0uc2l6ZS53XCIgQGJsdXI9XCJzaXplQ2hhbmdlXCJcbiAgICAgICAgICAgIDptaW49XCJzaXplLndtaW5cIiA6bWF4PVwiJHN0b3JlLnN0YXRlLnBhZ2UucGhvbmVXaWR0aC1kcmFnRm9ybS5sb2NhdGlvbi54XCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFkcmFnRm9ybS5pc1VwbG9hZFwiIGNvbnRyb2xzLXBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgY2xhc3M9XCJudW0taW5wdXRcIj48L2VsLWlucHV0LW51bWJlcj5cbiAgICAgICAgICA8ZWwtaW5wdXQtbnVtYmVyIHYtbW9kZWw9XCJkcmFnRm9ybS5zaXplLmhcIiBAYmx1cj1cInNpemVDaGFuZ2VcIlxuICAgICAgICAgICAgOm1pbj1cInNpemUuaG1pblwiIDptYXg9XCIkc3RvcmUuc3RhdGUucGFnZS5waG9uZUhlaWdodC1kcmFnRm9ybS5sb2NhdGlvbi55XCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFkcmFnRm9ybS5pc1VwbG9hZFwiIGNvbnRyb2xzLXBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgY2xhc3M9XCJudW0taW5wdXRcIj48L2VsLWlucHV0LW51bWJlcj5cbiAgICAgICAgPC9lbC1mb3JtLWl0ZW0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZWMtbGFiZWxcIj4gPGxhYmVsPuWuvTwvbGFiZWw+IDxsYWJlbD7pq5g8L2xhYmVsPjwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJkcmFnRm9ybS5pc1VwbG9hZFwiPlxuICAgICAgICAgICAgPGVsLWZvcm0taXRlbSBsYWJlbD1cIuWbuuWumuS9jee9ru+8mlwiIHNpemU9XCJtaW5pXCI+XG4gICAgICAgICAgICA8ZWwtcmFkaW8gdi1tb2RlbD1cImRyYWdGb3JtLnBvc2l0aW9uXCIgbGFiZWw9XCJyZWxhdGl2ZVwiPuS4jeWbuuWumjwvZWwtcmFkaW8+XG4gICAgICAgICAgICA8ZWwtcmFkaW8gdi1tb2RlbD1cImRyYWdGb3JtLnBvc2l0aW9uXCIgbGFiZWw9XCJmaXhlZFRvcFwiIEBjaGFuZ2U9XCJwb3NpdGlvbkNoYW5nZVwiXG4gICAgICAgICAgICAgID7nm7jlr7npobbpg6jlm7rlrpo8L2VsLXJhZGlvPlxuICAgICAgICAgICAgPGVsLXJhZGlvIHYtbW9kZWw9XCJkcmFnRm9ybS5wb3NpdGlvblwiIGxhYmVsPVwiZml4ZWRCb3R0b21cIiBAY2hhbmdlPVwicG9zaXRpb25DaGFuZ2VcIlxuICAgICAgICAgICAgICA+55u45a+55bqV6YOo5Zu65a6aPC9lbC1yYWRpbz5cbiAgICAgICAgICAgIDwvZWwtZm9ybS1pdGVtPlxuICAgICAgICAgICAgPGVsLWZvcm0taXRlbSBsYWJlbD1cIui3neemu++8mlwiIHNpemU9XCJtaW5pXCIgdi1pZj1cImRyYWdGb3JtLnBvc2l0aW9uID09PSAnZml4ZWRUb3AnXCI+XG4gICAgICAgICAgICAgIDxlbC1pbnB1dC1udW1iZXJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZml4ZWRUb3BcIiBAY2hhbmdlPVwiZml4ZWRUb3BDaGFuZ2VcIlxuICAgICAgICAgICAgICAgIDptaW49XCJsb2NhdGlvbi55bWluXCIgOm1heD1cIigkc3RvcmUuc3RhdGUucGFnZS5zY3JlZW5IZWlnaHQtZHJhZ0Zvcm0uc2l6ZS5oKVwiXG4gICAgICAgICAgICAgICAgY29udHJvbHMtcG9zaXRpb249XCJyaWdodFwiIGNsYXNzPVwibnVtLWlucHV0XCI+PC9lbC1pbnB1dC1udW1iZXI+XG4gICAgICAgICAgICA8L2VsLWZvcm0taXRlbT5cbiAgICAgICAgICAgIDxlbC1mb3JtLWl0ZW0gbGFiZWw9XCLot53nprvvvJpcIiBzaXplPVwibWluaVwiIHYtaWY9XCJkcmFnRm9ybS5wb3NpdGlvbiA9PT0gJ2ZpeGVkQm90dG9tJ1wiPlxuICAgICAgICAgICAgICA8ZWwtaW5wdXQtbnVtYmVyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpeGVkQm90dG9tXCIgQGNoYW5nZT1cImZpeGVkQm90dG9tQ2hhbmdlXCJcbiAgICAgICAgICAgICAgICA6bWluPVwibG9jYXRpb24ueW1pblwiIDptYXg9XCIoJHN0b3JlLnN0YXRlLnBhZ2UucGhvbmVIZWlnaHQtZHJhZ0Zvcm0uc2l6ZS5oKVwiXG4gICAgICAgICAgICAgICAgY29udHJvbHMtcG9zaXRpb249XCJyaWdodFwiIGNsYXNzPVwibnVtLWlucHV0XCI+PC9lbC1pbnB1dC1udW1iZXI+XG4gICAgICAgICAgICA8L2VsLWZvcm0taXRlbT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9lbC1mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICA8YXVkaW8gdi1zaG93PVwiZmFsc2VcIiByZWY9XCJhdWRpb0xvYWRcIiAvPlxuICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGF1ZGlvVXBsYW9kIGZyb20gJ0AvY29tcG9uZW50cy9lZGl0b3IvZHJhZ1NldHRpbmcvdXBsb2FkL2F1ZGlvVXBsb2FkJztcbmltcG9ydCB7IGZvcm1hdFNlY29uZCB9IGZyb20gJ0AvdXRpbC90b29scyc7XG5pbXBvcnQgZHJhZ0NvbSBmcm9tICdAL3V0aWwvZHJhZ014aSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbZHJhZ0NvbSgpXSxcbiAgbmFtZTogJ0RyYWdTZXR0aW5nJyxcbiAgcHJvcHM6IHtcbiAgICBkcmFnRm9ybTogT2JqZWN0LFxuICAgIHNldEZvcm06IE9iamVjdCxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIGF1ZGlvVXBsYW9kLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc1VwbG9hZDogZmFsc2UsXG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICB4bWluOiAwLFxuICAgICAgICB5bWluOiAwLFxuICAgICAgfSxcbiAgICAgIHNpemU6IHtcbiAgICAgICAgd21pbjogMCxcbiAgICAgICAgaG1pbjogMCxcbiAgICAgIH0sXG4gICAgICBtZWRpYVNvdXJjZToge1xuICAgICAgICBhY2NlcHQ6ICcubXAzJyxcbiAgICAgIH0sXG4gICAgICBsYXN0Q29udDogJycsXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGF1ZGlvU291cmNlQ2hhbmdlKHR5cGUpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2F1ZGlvU291cmNlQ2hhbmdlJywgdHlwZSwgJ2RyYWdBdWRpb3MnLCAnYXVkaW9BY3RpdmUnKTtcbiAgICB9LFxuICAgIHNldHRpbmdDbG9zZSgpIHsgLy8g5YWz6Zet6K6+572uXG4gICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2VkaXRvcl91cGRhdGUnLCB7IGlzQXVkaW9TZXQ6IGZhbHNlIH0pO1xuICAgIH0sXG4gICAgbG9jYXRpb25DaGFuZ2UoKSB7IC8vIOS9jee9ruWAvOWPkeeUn+aUueWPmFxuICAgICAgdGhpcy4kZW1pdCgnaW5wdXQtbG9jYXRpb25DaGFuZ2UnLCAnZHJhZ0F1ZGlvcycsIHRoaXMuZHJhZ0Zvcm0ubG9jYXRpb24sICdhdWRpb0FjdGl2ZScpO1xuICAgIH0sXG4gICAgc2l6ZUNoYW5nZSgpIHsgLy8g5aSn5bCP5YC85Y+R55Sf5pS55Y+YXG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dC1zaXplQ2hhbmdlJywgJ2RyYWdBdWRpb3MnLCB0aGlzLmRyYWdGb3JtLnNpemUsICdhdWRpb0FjdGl2ZScpO1xuICAgIH0sXG4gICAgdXBsb2FkRG9uZShmaWxlKSB7XG4gICAgICB0aGlzLm9uRmlsZVN1Y2Nlc3MoZmlsZSwgJ2RyYWdBdWRpb3MnLCAnYXVkaW9BY3RpdmUnKTtcbiAgICB9LFxuICAgIGZpbGVSZW1vdmUoKSB7XG4gICAgICB0aGlzLm1lZGlhU291cmNlLm5hbWUgPSAnJztcbiAgICAgIHRoaXMuYXVkaW9DaGFuZ2Uoe1xuICAgICAgICBpc1VwbGFvZDogZmFsc2UsXG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgc2Vjb25kOiAwLFxuICAgICAgICBkdXJhdGlvbjogJzAwOjAwJyxcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICB9LCB0aGlzLCAnZHJhZ0F1ZGlvcycsICd2aWRlb0FjdGl2ZScsIHRydWUpO1xuICAgIH0sXG4gICAgb25GaWxlU3VjY2VzcyhmaWxlLCBkcmFnTGlzdCwgYWN0aXZlKSB7XG4gICAgICB0aGlzLiRyZWZzLmF1ZGlvTG9hZC5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGUudXJsKTtcbiAgICAgIGNvbnN0IGVsZSA9IHRoaXM7XG4gICAgICB0aGlzLiRyZWZzLmF1ZGlvTG9hZC5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsIGZ1bmN0aW9uIGNiKCkge1xuICAgICAgICBjb25zdCBiZWZvcmVOYW1lID0gZmlsZS5iZWZvcmVOYW1lID8gZmlsZS5iZWZvcmVOYW1lIDogZmlsZS5uYW1lO1xuICAgICAgICBjb25zdCBuYW1lID0gZWxlLmRyYWdGb3JtLnNvdXJjZVR5cGUgPT09ICcxJyA/IGJlZm9yZU5hbWUgOiBmaWxlLnVybDtcbiAgICAgICAgZWxlLm1lZGlhU291cmNlID0geyBuYW1lIH07XG4gICAgICAgIGNvbnN0IHNlID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgY29uc3QgcGxheSA9IHtcbiAgICAgICAgICB0aXRsZTogbmFtZSxcbiAgICAgICAgICB1cmw6IGZpbGUudXJsLFxuICAgICAgICAgIHNlY29uZDogc2UsXG4gICAgICAgICAgZHVyYXRpb246IGZvcm1hdFNlY29uZChzZSksXG4gICAgICAgICAgaXNVcGxhb2Q6IHRydWUsXG4gICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBwbGF5T2JqID0geyBwbGF5IH07XG4gICAgICAgIGlmIChlbGUuZHJhZ0Zvcm0uc291cmNlVHlwZSA9PT0gJzInKSB7XG4gICAgICAgICAgcGxheU9iaiA9IHsgbGluZVBsYXk6IHBsYXkgfTtcbiAgICAgICAgfVxuICAgICAgICBlbGUuYXVkaW9DaGFuZ2UocGxheU9iaiwgZWxlLCBkcmFnTGlzdCwgYWN0aXZlKTtcbiAgICAgICAgaWYgKGVsZS5kcmFnRm9ybS5zb3VyY2VUeXBlID09PSAnMScpIHtcbiAgICAgICAgICBlbGUuJG1lc3NhZ2Uoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ+mfs+mikeS4iuS8oOaIkOWKn++9nicsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlbGUuJHJlZnMubWVkaWFVcGxvYWQudXBsYW9kRG9uZSh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGUuJG1lc3NhZ2Uoe1xuICAgICAgICAgICAgbWVzc2FnZTogJ+WcqOe6v+mfs+mikeiuv+mXruaIkOWKn++9nicsXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuJHJlZnMuYXVkaW9Mb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICBpZiAoZWxlLmRyYWdGb3JtLnNvdXJjZVR5cGUgPT09ICcyJykge1xuICAgICAgICAgIGVsZS5vbkZpbGVFcnJvcign6LWE5rqQ5LiN5a2Y5Zyo5oiW5bey57uP5o2f5Z2P77yM6K+36YeN6K+V772eJyk7XG4gICAgICAgICAgZWxlLm1lZGlhQ2hhbmdlKHt9LCBlbGUsIGRyYWdMaXN0LCBhY3RpdmUsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZS5vbkZpbGVFcnJvcigpO1xuICAgICAgICAgIGVsZS5tZWRpYUNoYW5nZSh7fSwgZWxlLCBkcmFnTGlzdCwgYWN0aXZlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBhdWRpb0NoYW5nZShwbGF5LCBlbGUsIGRyYWdMaXN0LCBhY3RpdmUsIGlzUmVtb3ZlKSB7XG4gICAgICBjb25zdCBsaXN0cyA9IGVsZS4kc3RvcmUuc3RhdGUuZWRpdG9yW2RyYWdMaXN0XTtcbiAgICAgIGxldCBkcmFncyA9IGxpc3RzW2VsZS4kc3RvcmUuc3RhdGUuZWRpdG9yW2FjdGl2ZV1dO1xuICAgICAgZHJhZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBkcmFncywgcGxheSk7XG4gICAgICBpZiAoIWlzUmVtb3ZlKSB7XG4gICAgICAgIGRyYWdzLmxvY2F0aW9uID0ge1xuICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgeTogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZHJhZ3MuaXNVcGxvYWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHJhZ3MuaXNVcGxvYWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxpc3RzW2VsZS4kc3RvcmUuc3RhdGUuZWRpdG9yW2FjdGl2ZV1dID0gZHJhZ3M7XG4gICAgICBlbGUuJHN0b3JlLmNvbW1pdCgnZWRpdG9yX3VwZGF0ZScsIHsgW2RyYWdMaXN0XTogbGlzdHMgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZHJhZ3MuaXNVcGxvYWQgPSB0cnVlO1xuICAgICAgICBsaXN0c1tlbGUuJHN0b3JlLnN0YXRlLmVkaXRvclthY3RpdmVdXSA9IGRyYWdzO1xuICAgICAgICBlbGUuJHN0b3JlLmNvbW1pdCgnZWRpdG9yX3VwZGF0ZScsIHsgW2RyYWdMaXN0XTogbGlzdHMgfSk7XG4gICAgICB9LCAxMDApO1xuICAgIH0sXG4gICAgb25GaWxlRXJyb3IobXNnKSB7IC8vIOWbvueJh+S4iuS8oOWksei0pVxuICAgICAgdGhpcy5maWxlRmFpbCA9IHRydWU7XG4gICAgICB0aGlzLmZpbGVBYmxlID0gZmFsc2U7XG4gICAgICBjb25zdCBtZXNzYWdlID0gbXNnIHx8ICfpn7PpopHkuIrkvKDlpLHotKXvvIzor7fph43or5XvvZ4nO1xuICAgICAgdGhpcy4kbWVzc2FnZSh7XG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgfSk7XG4gICAgICBpZiAoIW1zZykgdGhpcy4kcmVmcy5tZWRpYVVwbG9hZC51cGxhb2REb25lKHRydWUpO1xuICAgIH0sXG4gICAgcG9zaXRpb25DaGFuZ2UoKSB7XG4gICAgICBjb25zdCBtYXhCb3R0b20gPSB0aGlzLiRzdG9yZS5zdGF0ZS5wYWdlLnNjcmVlbkhlaWdodCAtIHRoaXMuZHJhZ0Zvcm0uc2l6ZS5oO1xuICAgICAgaWYgKHRoaXMuZHJhZ0Zvcm0ubG9jYXRpb24ueSA+IG1heEJvdHRvbSkge1xuICAgICAgICBjb25zdCB7IGxvY2F0aW9uIH0gPSB0aGlzLmRyYWdGb3JtO1xuICAgICAgICBsb2NhdGlvbi55ID0gbWF4Qm90dG9tO1xuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dC1sb2NhdGlvbkNoYW5nZScsICdkcmFnQXVkaW9zJywgbG9jYXRpb24sICdhdWRpb0FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGluZVNvdXJjZUJsdXIoKSB7XG4gICAgICBjb25zdCB2YWwgPSB0aGlzLmRyYWdGb3JtLmxpbmVQbGF5LnVybDtcbiAgICAgIGlmICh0aGlzLmxhc3RDb250ICYmIHRoaXMubGFzdENvbnQgPT09IHZhbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgdGhpcy5sYXN0Q29udCA9IHZhbDtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ0Zvcm0ubGluZVZpZGVvICYmXG4gICAgICAgIHRoaXMuZHJhZ0Zvcm0ubGluZVZpZGVvLnVybCAmJiB0aGlzLmRyYWdGb3JtLmxpbmVWaWRlby51cmwgPT09IHZhbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLm9uRmlsZVN1Y2Nlc3MoeyB1cmw6IHZhbCB9LCAnZHJhZ0F1ZGlvcycsICdhdWRpb0FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRWaWRlb0luaXQobnVsbCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmF1ZGlvLWVsLmVsLWZvcm0taXRlbS0tbWluaSAuZWwtZm9ybS1pdGVtX19jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI1NXB4O1xufVxuLmF1ZGlvLWVsIC5lbC1pbnB1dF9faW5uZXIge1xuICBwYWRkaW5nOiAwIDhweDtcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3SEE7QUEzQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/editor/dragSetting/dragAudioSetting.vue?vue&type=script&lang=js&\n");

/***/ })

})