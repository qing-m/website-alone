import Vue from 'vue'
import SvgIcon from '@/components/svgIcon/index.vue'// svg组件

Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/icons/svg', false, /\.svg$/)
requireAll(req)
