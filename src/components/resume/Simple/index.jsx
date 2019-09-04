// 简单版的个人简历
import React, { useState, useEffect } from 'react';
import { initScript } from './js/sim';
import './index.less';
export default function SimpleResume(props){
    useEffect(() => {
        initScript();
    }, []);
    return (
        <section className="simpleResume-wrapper">{/* 页头导航开始 */}
            <div id="nav">
                <ul>
                <li>
                    <a href="#xk">自我描述</a>
                    <span>>></span></li>
                <li>
                    <a href="#jy">项目经验</a>
                    <span>>></span></li>
                <li>
                    <a href="#jl">工作经历</a></li>
                </ul>
                <a href="../cool/cool.html" class="kx"></a>
            </div>
            {/* 页头导航结束 */} 
            {/* 工作经验开始 */}
            <div id="per">
                <div class="photo">
                <a name="xk"></a>
                
                <img src={require('@/assets/resume/cool/simple/img_avatar.jpg')} /></div>
                <div class="name">张耀煌</div>
                <div class="tel">
                    <ul>
                    <li>最高学历：
                    <span>本科</span></li>
                    <li>期望职位：
                    <span>WEB前端开发工程师</span></li>
                    <li>工作经验：
                    <span>2年+</span></li>
                    <li>工作性质：
                    <span>全职</span></li>
                    <li>出生年月：
                    <span>1995年 男</span></li>
                    <li>期望城市：
                    <span>厦门</span></li>
                    <li>所在城市：
                    <span>厦门</span></li>
                    <li>期望月薪：
                    <span>11K~15K</span></li>
                    <li>手机号码：
                    <span>18450087586</span></li>
                    <li>补充说明：
                    <span>暂无</span></li>
                    <li>联系邮箱：
                    <span>1204788939@qq.com</span></li>
                </ul>
                </div>
            </div>
            {/* 工作经验结束 */} 
            {/* 项目经验开始 */}
            <div id="exp">
                <div class="title">
                <a name="jy"></a>
                <span>项目经验</span></div>
                <ul class="ect">
                <li>
                    <div class="xz">
                    <div class="cir2"></div>
                    <div class="img">
                        <img src={require('@/assets/resume/cool/simple/4.jpg')} /></div>
                    <div class="show"></div>
                    </div>
                    <div class="txt">
                    <p class="txt1">腾讯电脑管家</p>
                    <p class="txt2">2015.09</p></div>
                </li>
                <li>
                    <div class="xz">
                    <div class="cir2"></div>
                    <div class="img">
                    
                        <img src={require('@/assets/resume/cool/simple/bg555.png')} /></div>
                    <div class="show"></div>
                    </div>
                    <div class="txt">
                    <p class="txt1">腾讯电脑管家</p>
                    <p class="txt2">2015.09</p></div>
                </li>
                <li>
                    <div class="xz">
                    <div class="cir2"></div>
                    <div class="img">
                        <img src={require('@/assets/resume/cool/simple/bg555.png')} /></div>
                    <div class="show"></div>
                    </div>
                    <div class="txt">
                    <p class="txt1">腾讯电脑管家</p>
                    <p class="txt2">2015.09</p></div>
                </li>
                <li>
                    <div class="xz">
                    <div class="cir2"></div>
                    <div class="img">
                        <img src={require('@/assets/resume/cool/simple/bg555.png')} /></div>
                    <div class="show"></div>
                    </div>
                    <div class="txt">
                    <p class="txt1">腾讯电脑管家</p>
                    <p class="txt2">2015.09</p></div>
                </li>
                <li>
                    <div class="xz">
                    <div class="cir2"></div>
                    <div class="img">
                        <img src={require('@/assets/resume/cool/simple/bg555.png')} /></div>
                    <div class="show"></div>
                    </div>
                    <div class="txt">
                    <p class="txt1">腾讯电脑管家</p>
                    <p class="txt2">2015.09</p></div>
                </li>
                <li>
                    <div class="xz">
                    <div class="cir2"></div>
                    <div class="img">
                        <img src={require('@/assets/resume/cool/simple/bg555.png')} /></div>
                    <div class="show"></div>
                    </div>
                    <div class="txt">
                    <p class="txt1">腾讯电脑管家</p>
                    <p class="txt2">2015.09</p></div>
                </li>
                </ul>
                <div style="clear:both;"></div>
            </div>
            {/* 项目经验结束 */} 
            {/* 遮罩层开始 */}
            <div id="mask"></div>
            <div id="case">
                <ul>
                    <li>
                        <div class="content">
                        <div class="caseImg">
                        
                            <img src={require('@/assets/resume/cool/simple/1.jpg')} />
                            <img src={require('@/assets/resume/cool/simple/2.jpg')} />
                            <img src={require('@/assets/resume/cool/simple/3.jpg')} /></div>
                        <div class="caseTxt">
                            <p>项目名称：
                            <span>腾讯电脑管家</span></p>
                            <p>项目时间：
                            <span>2015.09</span></p>
                            <p>项目链接：
                            <span>
                                <a href="#">www.miaov.com/student/liujian/works/1/html/
                                <span class="link"></span></a>
                            </span>
                            </p>
                            <p>项目描述：
                            <span class="bbb">这是我在学习WEB前端开发时的一个实战项目，这是一个视觉差效果网站，里面综合运用了JS+CSS3+各种事件，是我学习阶段的一个总结式作品……这是我在学习WEB前端开发时的一个实战项目，这是一个视觉差效果网站，里面综合运用了JS+CSS3+各种事件，是我学习阶段的一个总结式作品……</span></p>
                            <div style="clear:both;"></div>
                        </div>
                        </div>
                        <div class="close"></div>
                    </li>
                    <li>
                        <div class="content">
                        <div class="caseImg">
                            <img src={require('@/assets/resume/cool/simple/1.jpg')} />
                            <img src={require('@/assets/resume/cool/simple/2.jpg')} />
                            <img src={require('@/assets/resume/cool/simple/3.jpg')} /></div>
                        <div class="caseTxt">
                            <p>项目名称：
                            <span>腾讯电脑管家</span></p>
                            <p>项目时间：
                            <span>2015.09</span></p>
                            <p>项目链接：
                            <span>
                                <a href="#">www.miaov.com/student/liujian/works/1/html/
                                <span class="link"></span></a>
                            </span>
                            </p>
                            <p>项目描述：
                            <span class="bbb">1111</span></p>
                            <div style="clear:both;"></div>
                        </div>
                        </div>
                        <div class="close"></div>
                    </li>
                    <li>
                        <div class="content">
                        <div class="caseImg">
                            <img src={require('@/assets/resume/cool/simple/1.jpg')} />
                            <img src={require('@/assets/resume/cool/simple/2.jpg')} />
                            <img src={require('@/assets/resume/cool/simple/3.jpg')} /></div>
                        <div class="caseTxt">
                            <p>项目名称：
                            <span>腾讯电脑管家</span></p>
                            <p>项目时间：
                            <span>2015.09</span></p>
                            <p>项目链接：
                            <span>
                                <a href="#">www.miaov.com/student/liujian/works/1/html/
                                <span class="link"></span></a>
                            </span>
                            </p>
                            <p>项目描述：
                            <span class="bbb">1111</span></p>
                            <div style="clear:both;"></div>
                        </div>
                        </div>
                        <div class="close"></div>
                    </li>
                    <li>
                        <div class="content">
                        <div class="caseImg">
                            <img src={require('@/assets/resume/cool/simple/1.jpg')} />
                            <img src={require('@/assets/resume/cool/simple/2.jpg')} />
                            <img src={require('@/assets/resume/cool/simple/3.jpg')} /></div>
                        <div class="caseTxt">
                            <p>项目名称：
                            <span>腾讯电脑管家</span></p>
                            <p>项目时间：
                            <span>2015.09</span></p>
                            <p>项目链接：
                            <span>
                                <a href="#">www.miaov.com/student/liujian/works/1/html/
                                <span class="link"></span></a>
                            </span>
                            </p>
                            <p>项目描述：
                            <span class="bbb">1111</span></p>
                            <div style="clear:both;"></div>
                        </div>
                        </div>
                        <div class="close"></div>
                    </li>
                    <li>
                        <div class="content">
                        <div class="caseImg">
                            <img src={require('@/assets/resume/cool/simple/1.jpg')} />
                            <img src={require('@/assets/resume/cool/simple/2.jpg')} />
                            <img src={require('@/assets/resume/cool/simple/3.jpg')} /></div>
                        <div class="caseTxt">
                            <p>项目名称：
                            <span>腾讯电脑管家</span></p>
                            <p>项目时间：
                            <span>2015.09</span></p>
                            <p>项目链接：
                            <span>
                                <a href="#">www.miaov.com/student/liujian/works/1/html/
                                <span class="link"></span></a>
                            </span>
                            </p>
                            <p>项目描述：
                            <span class="bbb">1111</span></p>
                            <div style="clear:both;"></div>
                        </div>
                        </div>
                        <div class="close"></div>
                    </li>
                    <li>
                    <div class="content">
                    <div class="caseImg">
                        <img src={require('@/assets/resume/cool/simple/1.jpg')} />
                        <img src={require('@/assets/resume/cool/simple/2.jpg')} />
                        <img src={require('@/assets/resume/cool/simple/3.jpg')} /></div>
                    <div class="caseTxt">
                        <p>项目名称：
                        <span>腾讯电脑管家</span></p>
                        <p>项目时间：
                        <span>2015.09</span></p>
                        <p>项目链接：
                        <span>
                            <a href="#">www.miaov.com/student/liujian/works/1/html/
                            <span class="link"></span></a>
                        </span>
                        </p>
                        <p>项目描述：
                        <span class="bbb">1111</span></p>
                        <div style="clear:both;"></div>
                    </div>
                    </div>
                    <div class="close"></div>
                </li>
                </ul>
            </div>
            {/* 遮罩层结束 */}
            {/* 页底工作经历开始 */}
            <div id="footer">
                <a name="jl"></a>
                <div class="title">工作经历</div>
                <div class="box">
                <div class="text">
                    <i>
                    </i>
                    <div class="title2">
                    <div class="img">
                    
                        <img src={require('@/assets/resume/cool/simple/2.png')} /></div>
                    <div class="name">
                        <p>秒味课堂</p>
                        <p class="time">2015年5月-2015年11月</p></div>
                    </div>
                    <div class="bg3">
                    <div class="ms">
                        <p class="ms1">工作描述：</p>
                        <p class="ms2">学习各种前端开发知识、技能、框架、PC端、移动端实战……</p></div>
                    </div>
                </div>
                <div class="text">
                    <i>
                    </i>
                    <div class="title2">
                    <div class="img">
                        <img src={require('@/assets/resume/cool/simple/1.png')} /></div>
                    <div class="name">
                        <p>北京金信云家科技有限公司</p>
                        <p class="time">2015年9月-2015年11月</p></div>
                    </div>
                    <div class="bg3">
                    <div class="ms">
                        <p class="ms1">工作描述：</p>
                        <p class="ms2">学习各种前端开发知识、技能、框架、PC端、移动端实战……</p></div>
                    </div>
                </div>
                </div>
            </div>
        {/* 页底工作经历结束 */}
        </section>
    );
}