import React from "react";
import { Svg, Path, G, Defs, Image, ClipPath } from "glamorous";
export default function ImageMatch(props){
    return (
        <Svg className="fan15 fan12" xmlns="http://www.w3.org/2000/Svg" width="480" height="480" viewBox="0 0 480 480" {...props}>
            <G className="fan-g" style={{ transform: 'translate(0px, 0px) scale(1)' }}>
                <Defs>
                <ClipPath id="SVGID2_1_1">
                    <Path d="M39,166.5c11.5-27.1,27.9-51.8,48.3-72.9l57.5,55.6c-13.6,14.1-24.5,30.6-32.2,48.6L39,166.5z"></Path>
                </ClipPath>
                </Defs>
                <G style={{clipPath:'url(#SVGID2_1_1)'}}>
                <Image style={{overflow:'visible', WebkitTransform: 'translate(35px,90px)', WebkitTransform: 'translate(35px,90px)', transform: 'translate(35px,90px)'}} width="110" height="110" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={require('@/assets/resume/cool/img/111.png')}></Image>
                </G>
            </G>
            <G className="fan-g" style={{ transform: 'translate(0px, 0px) scale(1)' }}>
                <Defs>
                <ClipPath id="SVGID2_1_2">
                    <Path d="M19.9,256.1c0.5-28,5.9-55.7,15.9-81.8l74.7,28.7c-6.7,17.4-10.3,35.9-10.6,54.5L19.9,256.1z"></Path>
                </ClipPath>
                </Defs>
                <G style={{clipPath:'url(#SVGID2_1_1)'}}>
                <Image style={{ overflow:'visible', WebkitTransform: 'translate(5px,165px)', transform: 'translate(5px,165px)' }} width="110" height="110" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={require('@/assets/resume/cool/img/111.png')}></Image>
                </G>
            </G>
            <G className="fan-g" style={{ transform: 'translate(0px, 0px) scale(1)' }}>
                <Defs>
                <ClipPath id="SVGID2_1_3">
                    <Path d="M37.4,350.2c-11-27.3-16.9-56.3-17.4-85.7l80-1.4c0.3,19.6,4.3,39,11.6,57.1L37.4,350.2z"></Path>
                </ClipPath>
                </Defs>
                <G style={{ clipPath:'url(#SVGID2_1_3)' }}>
                <Image style={{ overflow:'visible', WebkitTransform: 'translate(10px,240px)', transform: 'translate(10px,240px)',}} width="110" height="110" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={require('@/assets/resume/cool/img/111.png')}></Image>
                </G>
            </G>
            <G className="fan-g" style={{ transform: 'translate(0px, 0px) scale(1)' }}>
                <Defs>
                <ClipPath id="SVGID2_1_4">
                    <Path d="M87.3,427c-19.5-20.1-35.2-43.5-46.6-69.1l73.1-32.5c7.6,17,18.1,32.6,31.1,46.1L87.3,427z"></Path>
                </ClipPath>
                </Defs>
                <G style={{ clipPath:'url(#SVGID2_1_4)' }}>
                <Image style={{ overflow:'visible', WebkitTransform:'translate(40px,320px)', transform: 'translate(40px,320px)' }} width="110" height="110" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={require('@/assets/resume/cool/img/111.png')}></Image>
                </G>
            </G>
        </Svg>
    )
}