import 'vex-js/dist/css/vex.css'
import 'vex-js/dist/css/vex-theme-plain.css'
import vexDialog from 'vex-dialog'
import vex from 'vex-js'

vex.defaultOptions.className = 'vex-theme-plain'
vex.registerPlugin(vexDialog)

export default vex
