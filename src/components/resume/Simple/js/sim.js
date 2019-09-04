// import "@/assets/resume/js/xk.js";
import { getElementsByClassName } from '@/utils/xk';
export function initScript(){
	/*项目经验开始*/
	let oExp = document.getElementById('exp');
	let aExpUl = oExp.getElementsByTagName('ul')[0];
	let aExpLi = aExpUl.getElementsByTagName('li');

	/*遮罩层开始*/
	let oMask = document.getElementById('mask');
	let oCase = document.getElementById('case');
	let oCaseLi = oCase.getElementsByTagName('li');
	/*遮罩层结束*/

	for(let i=0;i<aExpLi.length;i++){
		oExpAuto(i);
	}

	function oExpAuto(a){
		let aExpXz = aExpLi[a].getElementsByTagName('div')[0];
		let aExpCir2 = aExpXz.getElementsByTagName('div')[0];
		aExpXz.onmouseover = function(){
			aExpCir2.style.width = '200px';
			aExpCir2.style.height = '200px';
			aExpCir2.style.margin = '0px auto 0px';
		}
		aExpXz.onmouseout = function(){
			aExpCir2.style.width = '176px';
			aExpCir2.style.height = '176px';
			aExpCir2.style.margin = '12px auto 0px';
		}
		/*遮罩层*/
		aExpLi[a].num = a;
		let aClose = oCaseLi[a].getElementsByTagName('div');
		aExpLi[a].onclick = function(){
			oMask.style.display = 'block';
			oCase.style.display = 'block';
			oCaseLi[this.num].style.display = 'block';
			
		}
		aClose[aClose.length-1].onclick = function(){
			oMask.style.display = 'none';
			oCase.style.display = 'none';
			for(let i=0;i<oCaseLi.length;i++){
				oCaseLi[i].style.display = 'none';
			}
		}
	}
	/*项目经验结束*/


}