import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Table,Button,Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Edit.css';

const columns = [
  
  {
    title:'ลำดับที่',
    dataIndex: 'no',
    className:'table_style'
    
    
  },
  {
    title: 'รหัสบุคลากร',
    dataIndex: 'officer_code',
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
    title: 'ตำแหน่ง',
    dataIndex: 'position',
    className:'table_style'
  },
  {
    title: 'แก้ไข',
    dataIndex: 'modify',
    className:'table_style'
  
  },
  {
    title: 'ลบ',
    dataIndex: 'delete',
    className:'table_style'
    
  },
];

const data = [
  {
    key: '1',
    no:'1',
    officer_code:'02456',
    name: 'สมเกียรติ',
    surname:'จันทะน้อย',
    identity_card:'1-1888-00897-48-7',
    position:'ผู้จัดการ',
    modify:<Button style={{backgroundColor:'#ff9900',border:'#ffd11a', borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faPencilAlt} />
  </Button>,

    delete:<Popconfirm title="คุณแน่ใจหรือไม่" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
   <Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faTrashAlt} />
    </Button>
     </Popconfirm>
   
  },
  {
    key: '2',
    no:'2',
    officer_code:'02457',
    name: 'ปิยะวัช',
    surname:'กุณะมา',
    identity_card:'1-1848-00567-44-5',
    position:'บัญชี',
    modify:<Button style={{backgroundColor:'#ff9900',border:'#ffd11a', borderRadius: '0.25em'}}>
             <FontAwesomeIcon style={{color:'white'}} icon={faPencilAlt} />
          </Button>,
    delete:<Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
           <FontAwesomeIcon style={{color:'white'}} icon={faTrashAlt} />
           </Button>
  },
  {
    key: '3',
    no:'3',
    officer_code:'02458',
    name: 'นครินทร์',
    surname:'มีชม',
    identity_card:'1-1348-00667-44-1',
    position:'ธุรการ',
    modify:<Button style={{backgroundColor:'#ff9900',border:'#ffd11a', borderRadius: '0.25em'}}>
             <FontAwesomeIcon style={{color:'white'}} icon={faPencilAlt} />
          </Button>,
    delete:<Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
           <FontAwesomeIcon style={{color:'white'}} icon={faTrashAlt} />
           </Button>
  },
  {
    key: '4',
    no:'4',
    officer_code:'02459',
    name: 'มนตรี',
    surname:'เฉลิมถ้อย',
    identity_card:'2-2348-06767-44-0',
    position:'แอดมิน',
    modify:<Button style={{backgroundColor:'#ff9900',border:'#ffd11a', borderRadius: '0.25em'}}>
             <FontAwesomeIcon style={{color:'white'}} icon={faPencilAlt} />
          </Button>,
    delete:<Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
           <FontAwesomeIcon style={{color:'white'}} icon={faTrashAlt} />
           </Button>
  },
  {
    key: '5',
    no:'5',
    officer_code:'02460',
    name: 'นันทศักดิ์',
    surname:'กลิ่นนวล',
    identity_card:'1-1558-00667-54-5',
    position:'บัญชี',
    modify:<Button style={{backgroundColor:'#ff9900',border:'#ffd11a', borderRadius: '0.25em'}}>
             <FontAwesomeIcon style={{color:'white'}} icon={faPencilAlt} />
          </Button>,
    delete:<Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
           <FontAwesomeIcon style={{color:'white'}} icon={faTrashAlt} />
           </Button>
  },
  {
    key: '6',
    no:'6',
    officer_code:'02461',
    name: 'ณัฐฏ์',
    surname:'ตันโชคช่วง',
    identity_card:'3-1338-00667-44-3',
    position:'การเงิน',
    modify:<Button style={{backgroundColor:'#ff9900',border:'#ffd11a', borderRadius: '0.25em'}}>
             <FontAwesomeIcon style={{color:'white'}} icon={faPencilAlt} />
          </Button>,
    delete:<Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
           <FontAwesomeIcon style={{color:'white'}} icon={faTrashAlt} />
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
