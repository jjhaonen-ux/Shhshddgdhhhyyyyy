/* ═══ قوالبُ تُحمَّل عند الطلب · ميزانية الإقلاع ═══
   «فيلا العرض» (tools/showcase.js + tplscript.js ≈ 5 ك.ب مضغوطة) كانت تُستورَد
   عند الإقلاع لمجرّد تسجيل قالبها. تُسجِّل نفسَها بـdefineTemplate عند الاستيراد،
   فنستورد عند أوّل طلبٍ لها ثم يُعاد التطبيق. (الاتجاه core ← tools ثابت، فالخريطة
   هنا في الواجهة لا في core/templates.js.) */
import {getTemplate} from "../core/templates.js";

const LAZY={showcase:()=>import("../tools/showcase.js")};

export const needsLoad=name=>!getTemplate(name)&&!!LAZY[name];
export const loadTemplate=name=>LAZY[name]?LAZY[name]():Promise.resolve();
