// 炫酷版的个人简历
import React, { useState, useEffect } from 'react';
import {initScript} from './js/cool';
// glamorous是我们调用svg并改变path的属性时比较重要的插件了
// https://www.cnblogs.com/a-cat/p/9473301.html
import { Svg, Path, ClipPath ,Defs, Line, G, Image } from "glamorous";
import ImageMatch from "@/components/Icons/ImageMatch";
import './index.less';
// react （create-react-app）项目中如何优雅的使用 svg组件
export default function CoolResume(props){
  useEffect(() => {
    initScript();
  }, []);
    return (
      <section className="coolResume-wrapper">
        <div id="ain">
        <div className="start">
          <div className="bar">
            <div className="left">
              <div className="bar1"></div>
            </div>
            <div className="right">
              <div className="bar2"></div>
            </div>
          </div>
          <div className="start1">
            <span className="jd">0</span>%</div>
          <div className="tri1">
            <div className="left"></div>
            <div className="right"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <div className="tri2">
            <div className="left"></div>
            <div className="right"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <div className="tri3">
            <div className="left"></div>
            <div className="right"></div>
            <div className="top"></div>
            <div className="bottom"></div>
          </div>
          <div className="con">了解一个人，您只需要
            <span className="con1">0</span>秒...</div></div>
        </div>
        {/* 结束动画 */} 
        {/* 页头导航开始 */}
        <div id="header">
          <div className="nav">
            <ul>
              <li className="hover">
                <a href="#">项目经验</a>
                <span>>></span></li>
              <li>
                <a href="#">工作经历</a>
                <span>>></span></li>
              <li>
                <a href="#">自我描述</a></li>
            </ul>
          </div>
        </div>
        {/* 页头导航结束 */}
        {/* 首页轮播开始 */}
        <div id="coll">
          <div id="coll1">
            <ul className="xian"></ul>
            <ul className="coll_ul">
              <li className="coll_li">
                <div className="ri_t">
                  <div className="title">图片配对</div>
                  <div className="con">
                    <p>整个过程利用随机数组打乱所有牌的顺序，存储这个数组，游戏区域中每个方块所在的索引值就是这个随机数组的索引值。每两次点击 进行一次比较，因为用到css3的技术 ，所以最好用谷歌、火狐来玩耍。</p>
                    <span className="qx222">详情>></span></div>
                </div>
                <div className="coll_li1">
                  <div>
                    <Svg className="svg22" xmlns="http://www.w3.org/2000/Svg">
                      <Line x1="0" y1="124" x2="105" y2="0" stroke="#0786b4" strokeWidth="1"></Line>
                      <Line x1="105" y1="0" x2="124" y2="0" stroke="#0786b4" strokeWidth="1"></Line>
                    </Svg>
                  </div>
                  <div className="top">
                    <div className="top1"></div>
                    <div className="top2"></div>
                    <div className="top3"></div>
                  </div>
                  <div className="line"></div>
                  <div className="center">
                    <div className="bg1">
                      <div className="txt">
                        <p>图片配对2222</p>
                        <p>2015.9</p>
                      </div>
                    </div>
                    <div className="cz">
                      <div className="bg1Left"></div>
                      <div className="bg1Right"></div>
                    </div>
                    <div className="bg2">
                      <div className="zwm">
                        <span className="zwm1"></span>
                        <span className="zwm2"></span>
                        <span className="x1"></span>
                        <span className="yuan"></span>
                        <div className="dian"></div>
                      </div>
                    </div>
                    <div className="bg3">
                      <ul className="bg3_ul">
                        <li className="bg3_li_one">
                          <img src={require('@/assets/resume/cool/img/111.png')} className="hover" /></li>
                        <li className="bg3_li_two"></li>
                        <li className="bg3_li_three">
                          <img src={require('@/assets/resume/cool/img/222.png')} /></li>
                        <li className="bg3_li_four"></li>
                        <li className="bg3_li_five">
                          <img src={require('@/assets/resume/cool/img/333.png')} /></li>
                        <li className="bg3_li_six"></li>
                        <li className="bg3_li_seven">
                          <img src={require('@/assets/resume/cool/img/444.png')} /></li>
                        <li className="bg3_li_eight"></li>
                      </ul>
                      <Svg className="svg1" xmlns="http://www.w3.org/2000/Svg"></Svg>
                      <img className="play" src={require('@/assets/resume/cool/img/play.png')} /></div>
                  </div>
                  <div className="bot">
                    <div className="txt">图片配对</div>
                    <div className="ban">
                      <div className="ban-y">
                        <span>2013</span>
                        <span>2014</span>
                        <span>2015</span>
                        <span>2016</span></div>
                    </div>
                    <div className="Svg">
                      <ImageMatch />
                    </div>
                    <div className="below-circle2">
                      <div className="below-circle">
                        <div className="fan-dotted2">
                          <div className="fan-dotted">
                            <div className="fan">
                              <div className="fan1"></div>
                              <div className="fan2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="coll_li">
                <div className="ri_t">
                  <div className="title">图片配对</div>
                  <div className="con">
                    <p>整个过程利用随机数组打乱所有牌的顺序，存储这个数组，游戏区域中每个方块所在的索引值就是这个随机数组的索引值。每两次点击 进行一次比较，因为用到css3的技术 ，所以最好用谷歌、火狐来玩耍。</p>
                    <span className="qx222">详情>></span></div>
                </div>
                <div className="coll_li1">
                  <div>
                    <Svg className="svg22" xmlns="http://www.w3.org/2000/Svg">
                      <Line x1="0" y1="124" x2="105" y2="0" stroke="#0786b4" strokeWidth="1"></Line>
                      <Line x1="105" y1="0" x2="124" y2="0" stroke="#0786b4" strokeWidth="1"></Line>
                    </Svg>
                  </div>
                  <div className="top">
                    <div className="top1"></div>
                    <div className="top2"></div>
                    <div className="top3"></div>
                  </div>
                  <div className="line"></div>
                  <div className="center">
                    <div className="bg1">
                      <div className="txt">
                        <p>图片配对2222</p>
                        <p>2015.9</p>
                      </div>
                    </div>
                    <div className="cz">
                      <div className="bg1Left"></div>
                      <div className="bg1Right"></div>
                    </div>
                    <div className="bg2">
                      <div className="zwm">
                        <span className="zwm1"></span>
                        <span className="zwm2"></span>
                        <span className="x1"></span>
                        <span className="yuan"></span>
                        <div className="dian"></div>
                      </div>
                    </div>
                    <div className="bg3">
                      <ul className="bg3_ul">
                        <li className="bg3_li_one">
                          <img src={require('@/assets/resume/cool/img/111.png')} className="hover" /></li>
                        <li className="bg3_li_two"></li>
                        <li className="bg3_li_three">
                          <img src={require('@/assets/resume/cool/img/222.png')} /></li>
                        <li className="bg3_li_four"></li>
                        <li  className="bg3_li_five">
                          <img src={require('@/assets/resume/cool/img/333.png')} /></li>
                        <li className="bg3_li_six"></li>
                        <li className="bg3_li_seven">
                          <img src={require('@/assets/resume/cool/img/444.png')} /></li>
                        <li className="bg3_li_eight"></li>
                      </ul>
                      <Svg className="svg1" xmlns="http://www.w3.org/2000/Svg"></Svg>
                      <img className="play" src={require('@/assets/resume/cool/img/play.png')} /></div>
                  </div>
                  <div className="bot">
                    <div className="txt">图片配对</div>
                    <div className="ban">
                      <div className="ban-y">
                        <span>2013</span>
                        <span>2014</span>
                        <span>2015</span>
                        <span>2016</span></div>
                    </div>
                    <div className="Svg">
                      <ImageMatch />
                    </div>
                    <div className="below-circle2">
                      <div className="below-circle">
                        <div className="fan-dotted2">
                          <div className="fan-dotted">
                            <div className="fan">
                              <div className="fan1"></div>
                              <div className="fan2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="coll_li">
                <div className="ri_t">
                  <div className="title">图片配对</div>
                  <div className="con">
                    <p>整个过程利用随机数组打乱所有牌的顺序，存储这个数组，游戏区域中每个方块所在的索引值就是这个随机数组的索引值。每两次点击 进行一次比较，因为用到css3的技术 ，所以最好用谷歌、火狐来玩耍。</p>
                    <span className="qx222">详情>></span></div>
                </div>
                <div className="coll_li1">
                  <div>
                    <Svg className="svg22" xmlns="http://www.w3.org/2000/Svg">
                      <Line x1="0" y1="124" x2="105" y2="0" stroke="#0786b4" strokeWidth="1"></Line>
                      <Line x1="105" y1="0" x2="124" y2="0" stroke="#0786b4" strokeWidth="1"></Line>
                    </Svg>
                  </div>
                  <div className="top">
                    <div className="top1"></div>
                    <div className="top2"></div>
                    <div className="top3"></div>
                  </div>
                  <div className="line"></div>
                  <div className="center">
                    <div className="bg1">
                      <div className="txt">
                        <p>图片配对2222</p>
                        <p>2015.9</p>
                      </div>
                    </div>
                    <div className="cz">
                      <div className="bg1Left"></div>
                      <div className="bg1Right"></div>
                    </div>
                    <div className="bg2">
                      <div className="zwm">
                        <span className="zwm1"></span>
                        <span className="zwm2"></span>
                        <span className="x1"></span>
                        <span className="yuan"></span>
                        <div className="dian"></div>
                      </div>
                    </div>
                    <div className="bg3">
                      <ul className="bg3_ul">
                        <li className="bg3_li_one">
                          <img src={require('@/assets/resume/cool/img/111.png')} className="hover" /></li>
                        <li className="bg3_li_two"></li>
                        <li className="bg3_li_three">
                          <img src={require('@/assets/resume/cool/img/222.png')} /></li>
                        <li className="bg3_li_four"></li>
                        <li  className="bg3_li_five">
                          <img src={require('@/assets/resume/cool/img/333.png')} /></li>
                        <li className="bg3_li_six"></li>
                        <li className="bg3_li_seven">
                          <img src={require('@/assets/resume/cool/img/444.png')} /></li>
                        <li className="bg3_li_eight"></li>
                      </ul>
                      <Svg className="svg1" xmlns="http://www.w3.org/2000/Svg"></Svg>
                      <img className="play" src={require('@/assets/resume/cool/img/play.png')} /></div>
                  </div>
                  <div className="bot">
                    <div className="txt">图片配对</div>
                    <div className="ban">
                      <div className="ban-y">
                        <span>2013</span>
                        <span>2014</span>
                        <span>2015</span>
                        <span>2016</span></div>
                    </div>
                    <div className="Svg">
                      <ImageMatch />
                    </div>
                    <div className="below-circle2">
                      <div className="below-circle">
                        <div className="fan-dotted2">
                          <div className="fan-dotted">
                            <div className="fan">
                              <div className="fan1"></div>
                              <div className="fan2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="coll_li">
                <div className="ri_t">
                  <div className="title">图片配对</div>
                  <div className="con">
                    <p>整个过程利用随机数组打乱所有牌的顺序，存储这个数组，游戏区域中每个方块所在的索引值就是这个随机数组的索引值。每两次点击 进行一次比较，因为用到css3的技术 ，所以最好用谷歌、火狐来玩耍。</p>
                    <span className="qx222">详情>></span></div>
                </div>
                <div className="coll_li1">
                  <div>
                    <Svg className="svg22" xmlns="http://www.w3.org/2000/Svg">
                      <Line x1="0" y1="124" x2="105" y2="0" stroke="#0786b4" strokeWidth="1"></Line>
                      <Line x1="105" y1="0" x2="124" y2="0" stroke="#0786b4" strokeWidth="1"></Line>
                    </Svg>
                  </div>
                  <div className="top">
                    <div className="top1"></div>
                    <div className="top2"></div>
                    <div className="top3"></div>
                  </div>
                  <div className="line"></div>
                  <div className="center">
                    <div className="bg1">
                      <div className="txt">
                        <p>图片配对2222</p>
                        <p>2015.9</p>
                      </div>
                    </div>
                    <div className="cz">
                      <div className="bg1Left"></div>
                      <div className="bg1Right"></div>
                    </div>
                    <div className="bg2">
                      <div className="zwm">
                        <span className="zwm1"></span>
                        <span className="zwm2"></span>
                        <span className="x1"></span>
                        <span className="yuan"></span>
                        <div className="dian"></div>
                      </div>
                    </div>
                    <div className="bg3">
                      <ul className="bg3_ul">
                        <li className="bg3_li_one">
                          <img src={require('@/assets/resume/cool/img/111.png')} className="hover" /></li>
                        <li className="bg3_li_two"></li>
                        <li className="bg3_li_three">
                          <img src={require('@/assets/resume/cool/img/222.png')} /></li>
                        <li className="bg3_li_four"></li>
                        <li  className="bg3_li_five">
                          <img src={require('@/assets/resume/cool/img/333.png')} /></li>
                        <li className="bg3_li_six"></li>
                        <li className="bg3_li_seven">
                          <img src={require('@/assets/resume/cool/img/444.png')} /></li>
                        <li className="bg3_li_eight"></li>
                      </ul>
                      <Svg className="svg1" xmlns="http://www.w3.org/2000/Svg"></Svg>
                      <img className="play" src={require('@/assets/resume/cool/img/play.png')} /></div>
                  </div>
                  <div className="bot">
                    <div className="txt">图片配对</div>
                    <div className="ban">
                      <div className="ban-y">
                        <span>2013</span>
                        <span>2014</span>
                        <span>2015</span>
                        <span>2016</span></div>
                    </div>
                    <div className="Svg">
                      <ImageMatch />
                    </div>
                    <div className="below-circle2">
                      <div className="below-circle">
                        <div className="fan-dotted2">
                          <div className="fan-dotted">
                            <div className="fan">
                              <div className="fan1"></div>
                              <div className="fan2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="but"></ul>{/* 遮罩层开始 */}
            <div id="mask"></div>
            <div id="case">
              <ul>
                <li>
                  <div className="content">
                    <div className="caseImg">
                      <img src={require('@/assets/resume/cool/img/1.jpg')} />
                      <img src={require('@/assets/resume/cool/img/2.jpg')} />
                      <img src={require('@/assets/resume/cool/img/3.jpg')} /></div>
                    <div className="caseTxt">
                      <p>项目名称：
                        <span>腾讯电脑管家</span></p>
                      <p>项目时间：
                        <span>2015.09</span></p>
                      <p>项目链接：
                        <span>
                          <a href="#">www.miaov.com/student/liujian/works/1/html/
                            <span className="link"></span></a>
                        </span>
                      </p>
                      <p>项目描述：
                        <span className="bbb">这是我在学习WEB前端开发时的一个实战项目，这是一个视觉差效果网站，里面综合运用了JS+CSS3+各种事件，是我学习阶段的一个总结式作品……这是我在学习WEB前端开发时的一个实战项目，这是一个视觉差效果网站，里面综合运用了JS+CSS3+各种事件，是我学习阶段的一个总结式作品……</span></p>
                      <div className="clearfix" ></div>
                    </div>
                  </div>
                  <div className="close"></div>
                </li>
                <li>
                  <div className="content">
                    <div className="caseImg">
                      <img src={require('@/assets/resume/cool/img/1.jpg')} />
                      <img src={require('@/assets/resume/cool/img/2.jpg')} />
                      <img src={require('@/assets/resume/cool/img/3.jpg')} /></div>
                    <div className="caseTxt">
                      <p>项目名称：
                        <span>腾讯电脑管家</span></p>
                      <p>项目时间：
                        <span>2015.09</span></p>
                      <p>项目链接：
                        <span>
                          <a href="#">www.miaov.com/student/liujian/works/1/html/
                            <span className="link"></span></a>
                        </span>
                      </p>
                      <p>项目描述：
                        <span className="bbb">1111</span></p>
                      <div className="clearfix" ></div>
                    </div>
                  </div>
                  <div className="close"></div>
                </li>
                <li>
                  <div className="content">
                    <div className="caseImg">
                      <img src={require('@/assets/resume/cool/img/1.jpg')} />
                      <img src={require('@/assets/resume/cool/img/2.jpg')} />
                      <img src={require('@/assets/resume/cool/img/3.jpg')} /></div>
                    <div className="caseTxt">
                      <p>项目名称：
                        <span>腾讯电脑管家</span></p>
                      <p>项目时间：
                        <span>2015.09</span></p>
                      <p>项目链接：
                        <span>
                          <a href="#">www.miaov.com/student/liujian/works/1/html/
                            <span className="link"></span></a>
                        </span>
                      </p>
                      <p>项目描述：
                        <span className="bbb">1111</span></p>
                      <div className="clearfix" ></div>
                    </div>
                  </div>
                  <div className="close"></div>
                </li>
                <li>
                  <div className="content">
                    <div className="caseImg">
                      <img src={require('@/assets/resume/cool/img/1.jpg')} />
                      <img src={require('@/assets/resume/cool/img/2.jpg')} />
                      <img src={require('@/assets/resume/cool/img/3.jpg')} /></div>
                    <div className="caseTxt">
                      <p>项目名称：
                        <span>腾讯电脑管家</span></p>
                      <p>项目时间：
                        <span>2015.09</span></p>
                      <p>项目链接：
                        <span>
                          <a href="#">www.miaov.com/student/liujian/works/1/html/
                            <span className="link"></span></a>
                        </span>
                      </p>
                      <p>项目描述：
                        <span className="bbb">1111</span></p>
                      <div className="clearfix" ></div>
                    </div>
                  </div>
                  <div className="close"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 首页轮播结束 */}
        {/* 工作经历页面开始 */}
        <div id="work">
          <div id="work1">
            <div className="work2">
              <div className="work_svg">
                <Svg className="svg1" xmlns="http://www.w3.org/2000/Svg">
                  <G stroke='rgb(0,183,238)' strokeWidth='2' fill='transparent'>
                    <Path d="M5 46L5 21L26 21L37 3L136 3L136 21L243 21L285 51"></Path>
                    <Path d="M5 140L5 172L19 186L30 186"></Path>
                    <Path d="M283 151L249 186L218 186"></Path>
                    <Path d="M332 64L350 48L593 48L593 60"></Path>
                    <Path d="M593 122L593 132L583 145L573 145"></Path>
                    <Path d="M336 134L352 145L362 145"></Path>
                  </G>
                  <G stroke='white' strokeWidth='2' fill='transparent'>
                    <Path d="M140 3L140 17L245 17L287 47"></Path>
                    <Path d="M330 60L348 44L594 44"></Path>
                  </G>
                  <G stroke='white' strokeWidth='2' fill='transparent'>
                    <Path d="M30 186L218 186"></Path>
                    <Path d="M362 145L573 145"></Path>
                  </G>
                  <G stroke='white' strokeWidth='2' fill='transparent'>
                    <Path d="M30 182L30 190"></Path>
                    <Path d="M218 182L218 190"></Path>
                    <Path d="M573 141L573 149"></Path>
                    <Path d="M362 141L362 149"></Path>
                  </G>
                  <G stroke='white' strokeWidth='2' fill='transparent'>
                    <Path d="M5,48v 90" strokeWidth="2" strokeDasharray="2 4" style={{ stroke: '#f39938' }}></Path>
                    <Path d="M593,63v 56" strokeWidth="2" strokeDasharray="2 4" style={{ stroke: '#f39938' }}></Path>
                  </G>
                </Svg>
              </div>
              <div className="des">
                <div className="txt">
                  <p className="title">工作描述</p>
                  <p className="title1"></p>
                  <p className="con"></p>
                  <p className="qx">详情>></p></div>
              </div>
              <div className="port1"></div>
              <div className="port2"></div>
              <div className="work-right">
                <p className="time"></p>
                <div className="work-3D">
                  <div className="hover">
                    <i>
                    </i>
                    <span>敬请期待</span></div>
                  <div>
                    <i>
                    </i>
                    <span>敬请期待</span></div>
                  <div>
                    <i>
                    </i>
                    <span>敬请期待</span></div>
                  <div>
                    <i>
                    </i>
                    <span>敬请期待</span></div>
                  <div>
                    <i>
                    </i>
                    <span>敬请期待</span></div>
                  <div>
                    <i>
                    </i>
                    <span>敬请期待</span></div>
                  <div>
                    <i>
                    </i>
                    <span>敬请期待</span></div>
                  <div>
                    <i>
                    </i>
                    <span>敬请期待</span></div>
                </div>
                <div className="jt">
                  <a href="javascript:;"></a>
                  <a href="javascript:;"></a>
                </div>
              </div>
              <div className="cutufo"></div>
              <div className="cutufo1"></div>
            </div>
            <div className="shake"></div>
          </div>
          <div className="shade">
            <div className="alear">
              <p>工作描述</p>
              <a href="javascript:;"></a>
              <div></div>
            </div>
          </div>
        </div>
        {/* 工作经历页面结束 */} 
        {/* 自我描述开始 */}
        <div id="xxbg">
          <div id="xxbg1">
            <div id="xxbg2">
              <Svg className="svg3" xmlns="http://www.w3.org/2000/Svg">
                <G stroke="#fff" strokeWidth='2' fill='none'>
                  <Path d="M2 32L2 22L10 12L21 12"></Path>
                  <Path d="M531 12L542 12L550 22L550 32"></Path>
                  <Path d="M2 249L2 259L10 269L21 269"></Path>
                  <Path d="M531 269L542 269L550 259L550 249"></Path>
                  <Path d="M2 307L2 297L10 287L21 287"></Path>
                  <Path d="M536 287L548 287L555 297L555 307"></Path>
                  <Path d="M2 359L2 369L10 379L21 379"></Path>
                  <Path d="M536 379L546 379L554 369L554 359"></Path>
                </G>
                <G stroke="#00b7ee" strokeWidth='1' fill='none'>
                  <Path d="M9 28L15 20L540 20L545 28L545 191L556 200L556 232L545 242L545 255L540 261L15 261L10 254L10 239L1 228L1 200L11 188Z"></Path>
                  <Path d="M10 319L10 302L17 294L541 294L546 302L546 317L557 330L557 338L546 349L546 363L541 369L16 369L10 363L10 349L1 338L1 330L10 317"></Path>
                  <Path d="M3 196L3 81L10 71"></Path>
                  <Path d="M554 196L554 81L546 71"></Path>
                  <Path d="M155 19L175 1L363 1L383 19"></Path>
                </G>
                <G fill='rgba(0,190,190,.5)'>
                  <Path d="M180 15L190 5L200 15Z"></Path>
                  <Path d="M195 5L200 5L210 15L205 15Z"></Path>
                  <Path d="M205 5L235 5L245 15L215 15Z"></Path>
                  <Path d="M240 5L280 5L290 15L250 15Z"></Path>
                  <Path d="M285 5L350 5L360 15L295 15Z"></Path>
                </G>
              </Svg>
              <div className="xxtop">
                <div className="left">
                  <div className="circle"></div>
                  <div className="circle1">
                    <img src={require('@/assets/resume/cool/img/img_avatar.jpg')} /></div>
                  <div className="cletxt">
                    <p>张耀煌</p>
                    <p>2年+前端经验</p>
                  </div>
                </div>
                <div className="right">
                  <p>最高学历：
                    <span>本科 福建师范大学</span></p>
                  <p>工作经验：
                    <span>2年+</span></p>
                  <p>出身性别：
                    <span>1995年 男</span></p>
                  <p>所在城市：
                    <span>厦门</span></p>
                  <p>手机号码：
                    <span>18450087586</span></p>
                  <p>QQ 号码：
                    <span>1204788939</span></p>
                  <p>联系邮箱：
                    <span>1204788939@qq.com</span></p>
                </div>
              </div>
              <div className="center">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p>期望工作</p>
              </div>
              <div className="xxbot">
                <p>前端工程师 , 全职 , 厦门 , 11K-15K
                  <span className="xxbot1"></span></p>
              </div>
            </div>
          </div>
        </div>
        {/* 自我描述结束 */} 
        {/* 声音开启或关闭 */}
        <div id="dio">
          <a href="../sim/sim.html" className="kx"></a>
          <div className="dio">
            <span className="button"></span>
            <span className="bofang"></span>
          </div>
          <div>
            <audio src={require('@/assets/resume/cool/dio/BGsound.mp3')} autoPlay="autoplay" loop="loop"></audio>
            <audio src={require('@/assets/resume/cool/dio/sousou.mp3')}></audio>
            <audio src={require('@/assets/resume/cool/dio/zuan.mp3')}></audio>
            <audio src={require('@/assets/resume/cool/dio/ufo.mp3')}></audio>
            <audio src={require('@/assets/resume/cool/dio/rotation.mp3')}></audio>
            <audio src={require('@/assets/resume/cool/dio/type.mp3')}></audio>
            <audio src={require('@/assets/resume/cool/dio/transform-2.mp3')}></audio>
            <audio src={require('@/assets/resume/cool/dio/transform-1.mp3')}></audio>
            <audio src={require('@/assets/resume/cool/dio/info.mp3')}></audio>
            <audio src={require('@/assets/resume/cool/dio/laser-beam.mp3')}></audio>
          </div>
        </div>
      </section>
    );
}