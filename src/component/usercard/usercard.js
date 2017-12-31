import React from 'react';
import propTypes from 'prop-types';
import {Card,WhiteSpace,WingBlank} from 'antd-mobile';
export  default class UserCard extends  React.Component{
    static propTypes = {
        userList: propTypes.array.isRequired
    }

    render(){
        return(
            <WingBlank>
                <WhiteSpace/>
                {this.props.userList.map(v=>(
                    v.avatar ? (
                        <div  key={v._id}>
                            <WhiteSpace/>
                            <Card key={v._id}>
                                <Card.Header
                                    title={v.user}
                                    thumb={require(`../images/${v.avatar}.png`)}
                                    extra={<span>{v.title}</span>}
                                />
                                <Card.Body>
                                    {v.type == 'boss'? <div>公司名称:{v.company}</div>:null}
                                    {v.desc.split('\n').map(d=>(
                                        <div key={d}>{d}</div>
                                    ))}
                                    {v.type == 'boss'? <div>薪水:{v.money}</div>:null}
                                </Card.Body>
                            </Card>
                        </div>
                    ) : null
                ))}
            </WingBlank>
        )
    }
}

