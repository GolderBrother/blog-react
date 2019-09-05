import React from "react";
class BaseIcon extends React.PureComponent {
  //定义属性类型
  static propTypes = {
    SvgIcon: PropTypes.func.isRequired,
    color: PropTypes.string,
    circleColor: PropTypes.string,
    fontSize: PropTypes.string
  };

  static defaultProps = {
    color: "", //字体颜色
    circleColor: "#76829E" //多层path时背景颜色
  };

  render() {
    const { color, SvgIcon, circleColor, fontSize } = this.props;
    if (color === "" && circleColor === "") {
      return <SvgIcon {...this.props} />;
    }

    const WrappedSvgIcon = glamorous(SvgIcon)({
      "> path": {
        fill: color,
        width: fontSize, //设置fontSize来改变svg的大小
        height: fontSize //设置fontSize来改变svg的大小
      },
      "> circle": {
        fill: circleColor //设置带圆背景的icon 圆的颜色，下面会给您截图介绍
      }
    });

    return <WrappedSvgIcon {...this.props} />;
  }
}

export default BaseIcon;
