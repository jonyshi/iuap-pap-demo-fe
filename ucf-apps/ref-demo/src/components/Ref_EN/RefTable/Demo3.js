/**
 *
 * @title ref-tree 参照_en-树形_en
 * @description 具有单选多选的树形参照_en
 *
 */

import React, { Component } from 'react';
import { RefMultipleTableWithInput }  from 'pap-refer/dist/index.js';
import "pap-refer/dist/index.css"
// import { Button, FormControl  } from 'tinper-bee';
// import Form from 'bee-form';
import {Button,Form,FormControl} from 'tinper-bee';
import Card from '../Card'
let code = 
`
<div>
    <div className="demo-label">
        <span >人员参照：_en</span>
        <RefMultipleTableWithInput
            title={'人员_en'}

            param={{
                "refCode": "new_bd_staff"
            }}
            refModelUrl={{
                tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',//表体请求
                refInfo: '/pap_basedoc/common-ref/refInfo',//表头请求
            }}
            matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
            filterUrl='/pap_basedoc/common-ref/filterRefJSON'
            multiple={false}
            searchable={true}
            checkStrictly= {true}
            strictMode = {true}
            displayField='{refname}'
            valueField='refpk'

            {...getFieldProps('code1', {
                initialValue: '{"refname":"","refpk":""}',
                rules: [{
                    message: '提示：请选择_en',
                    pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                }]
            })}
            onSave = {(record)=>{
                console.log(record)
                let item = record[0]
                if(!item) return;
                this.setState({
                    name: item.name,
                    email: item.email,
                    mobile: item.mobile
                })
            }}
        />

        <span style={{
            color: 'red'
        }}>
            {
                getFieldError('code1')
            }
        </span>
    </div>
    <div className="demo-label">
        <span >人员名称：_en</span>
        <FormControl
            style={{
                width: 200
            }}
            value = {name}
        />
    </div>
    <div className="demo-label">
        <span >人员邮箱：_en</span>
        <FormControl
            style={{
                width: 200
            }}
            value = {email}
        />
    </div>
    <div className="demo-label">
        <span >人员电话：_en</span>
        <FormControl
            style={{
                width: 200
            }}
            value = {mobile}
        />
    </div>

</div>
`
class Demo3 extends Component {
    constructor() {
        super();
        this.state = {
            value:'',
            name: '',
            email: '',
            mobile: ''
        }

    }
    render() {
        
        const { getFieldProps, getFieldError } = this.props.form;
        const { style } = this.props;
        let {
            name,
            email,
            mobile,
        } = this.state;
        return (
                    <Card
                        style={style}
                        title="提取参照详细数据_en"
                        codeText={code}

                        footer={
                            <Button colors="primary"
                                style={{
                                    margin: 'auto 5px',
                                    height: '30px',
                                    padding: '0px'
                                }}
                                onClick={() => {
                                    this.props.form.validateFields((err, values) => {
                                        if(err) return;
                                        alert(`您选择的是_en${JSON.stringify(values)}`)
                                    });
                                }}
                            >
                                提交_en
                            </Button>
                        }
                    > 
                        <div className="demo-label">
                            <span >人员参照：_en</span>
                            <RefMultipleTableWithInput
                                title={'人员_en'}

                                param={{
                                    "refCode": "new_bd_staff"
                                }}
                                refModelUrl={{
                                    tableBodyUrl: '/pap_basedoc/common-ref/blobRefTreeGrid',//表体请求
                                    refInfo: '/pap_basedoc/common-ref/refInfo',//表头请求
                                 }}
                                matchUrl='/pap_basedoc/common-ref/matchPKRefJSON'
                                filterUrl='/pap_basedoc/common-ref/filterRefJSON'
                                multiple={false}
                                searchable={true}
                                checkStrictly= {true}
                                strictMode = {true}
                                displayField='{refname}'
                                valueField='refpk'
                                lang={this.props.lang}
                                emptyBut={true}                              

                                {...getFieldProps('code1', {
                                    initialValue: '{"refname":"","refpk":""}',
                                    rules: [{
                                        message: '提示：请选择_en',
                                        pattern: /[^{"refname":"","refpk":""}|{"refpk":"","refname":""}]/
                                    }]
                                })}
                                onSave = {(record)=>{
                                    console.log(record)
                                    let item = record[0]
                                    if(!item) return;
                                    this.setState({
                                        name: item.name,
                                        email: item.email,
                                        mobile: item.mobile
                                    })
                                }}
                            />

                            <span style={{
                                color: 'red'
                            }}>
                                {
                                    getFieldError('code1')
                                }
                            </span>
                        </div>
                        <div className="demo-label">
                            <span >人员名称：_en</span>
                            <FormControl
                                style={{
                                    width: 200
                                }}
                                value = {name}
                            />
                        </div>
                        <div className="demo-label">
                            <span >人员邮箱：_en</span>
                            <FormControl
                                style={{
                                    width: 200
                                }}
                                value = {email}
                            />
                        </div>
                        <div className="demo-label">
                            <span >人员电话：_en</span>
                            <FormControl
                                style={{
                                    width: 200
                                }}
                                value = {mobile}
                            />
                        </div>
                    </Card>
        )
    }
};

export default Form.createForm()(Demo3);

