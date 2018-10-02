/**
 * @Component 标记 - Badge
 * @Type 数据
 * @Author 瞿龙俊 - qulongjun@shine.design
 * @Date 2018/9/29 下午7:43
 */

// 核心依赖
import React, {Component, Fragment} from 'react';
import * as PropTypes from 'prop-types';

// 第三方依赖库
import classNames from 'classnames'
import _ from 'lodash';

// 组件依赖
import {COMMON_PROPS_TYPE, COMMON_PROPS_DEFAULT} from '../../config/commonProps';

// 样式
import './style';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        ...COMMON_PROPS_TYPE,
        color: PropTypes.oneOf(_.concat(require('../../config/color').default, 'default')),
        borderColor: PropTypes.oneOf(_.concat(require('../../config/color').default, 'default')),
        isWide: PropTypes.bool,
        isDot: PropTypes.bool,
        isRound: PropTypes.bool,
        text: PropTypes.node
    };

    static defaultProps = {
        ...COMMON_PROPS_DEFAULT,
        color: 'default',
        borderColor: 'default',
        isWide: false,
        isDot: false,
        isRound: false
    };

    render() {
        const {color, borderColor, isWide, isDot, isRound, text, className, callbacks, attributes} = this.props;
        const _badgeClass = classNames(
            'sh-badge',
            {
                [`sh-badge--${color}`]: _.isString(color) && !_.isEqual(color, 'default'),
                'sh-badge--bordered': _.isString(borderColor) && !_.isEqual(borderColor, 'default'),
                [`sh-badge-bordered--${borderColor}`]: _.isString(borderColor) && !_.isEqual(borderColor, 'default'),
                'sh-badge--wide': isWide,
                'sh-badge--rounded': isRound,
                'sh-badge--dot': isDot
            },
            ...(
                _.isArray(className) ? className : [className]
            )
        );
        return (
            <Fragment>
                <span
                    className={_badgeClass}
                    {...callbacks}
                    {...attributes}
                >{text}</span>
            </Fragment>
        );
    }
}