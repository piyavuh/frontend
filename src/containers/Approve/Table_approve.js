import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Table,Button } from 'antd';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Edit.css';

const columns = [
  
  {
    title:'ลำดับที่',
    dataIndex: 'no',
    className:'table_style'
    
    
  },
  {
    title: 'รหัสสมาชิก',
    dataIndex: 'member_code',
    className:'table_style'
    
  },
  {
    title: 'ชื่อ',
    dataIndex: 'name',
    className:'table_style'
  },
  {
    title: 'นามสกุล',
    dataIndex: 'surname',
    className:'table_style'
  },
  {
    title: 'เลขประจำตัวประชาชน',
    dataIndex: 'identity_card',
    className:'table_style'
  },
  {
    title: 'ประเภท',
    dataIndex: 'category',
    className:'table_style'
  },
  {
    title: 'อนุมัติ',
    dataIndex: 'modify',
    className:'table_style'
  
  },
  {
    title: 'ไม่อนุมัติ',
    dataIndex: 'delete',
    className:'table_style'
    
  },
];

const data = [
  {
    key: '1',
    no:'1',
    member_code:'02456',
    name: 'สมเกียรติ',
    surname:'จันทะน้อย',
    identity_card:'1-1888-00897-48-7',
    category:'สามัญ',
    modify:<Button style={{backgroundColor:'#47d147',border:'#47d147', borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faCheck} />
  </Button>,
    delete:<Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faTimes} />
    </Button>
   
  },
  {
    key: '2',
    no:'2',
    member_code:'02457',
    name: 'ปิยะวัช',
    surname:'กุณะมา',
    identity_card:'1-1848-00567-44-5',
    category:'สามัญ',
    modify:<Button style={{backgroundColor:'#47d147',border:'#47d147', borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faCheck} />
  </Button>,
    delete:<Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faTimes} />
    </Button>
   
  },
  {
    key: '3',
    no:'3',
    member_code:'02458',
    name: 'นครินทร์',
    surname:'มีชม',
    identity_card:'1-1348-00667-44-1',
    category:'สมทบ',
    modify:<Button style={{backgroundColor:'#47d147',border:'#47d147', borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faCheck} />
  </Button>,
    delete:<Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faTimes} />
    </Button>
   
  },
  {
    key: '4',
    no:'4',
    member_code:'02459',
    name: 'มนตรี',
    surname:'เฉลิมถ้อย',
    identity_card:'2-2348-06767-44-0',
    category:'สมทบ',
    modify:<Button style={{backgroundColor:'#47d147',border:'#47d147', borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faCheck} />
  </Button>,
    delete:<Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faTimes} />
    </Button>
   
  },
  {
    key: '5',
    no:'5',
    member_code:'02460',
    name: 'นันทศักดิ์',
    surname:'กลิ่นนวล',
    identity_card:'1-1558-00667-54-5',
    category:'สมทบ',
    modify:<Button style={{backgroundColor:'#47d147',border:'#47d147', borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faCheck} />
  </Button>,
    delete:<Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faTimes} />
    </Button>
   
  },
  {
    key: '6',
    no:'6',
    member_code:'02461',
    name: 'ณัฐฏ์',
    surname:'ตันโชคช่วง',
    identity_card:'3-1338-00667-44-3',
    category:'สมทบ',
    modify:<Button style={{backgroundColor:'#47d147',border:'#47d147', borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faCheck} />
  </Button>,
    delete:<Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faTimes} />
    </Button>
   
  },
];
export default class TableEditMember extends Component {
    render() {
        return (
            <div style={{margin:'30px 60px'}}>
                <Table
                columns={columns}
                dataSource={data}
                bordered
                />
            </div>
        )
    }
}
