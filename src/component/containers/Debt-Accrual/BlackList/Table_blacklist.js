import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Table,Button } from 'antd';
import { faMoneyBillWave, faNewspaper } from '@fortawesome/free-solid-svg-icons'
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
    title: 'ประเภท',
    dataIndex: 'identity_card',
    className:'table_style'
  },
  {
    title: 'เลยกำหนด',
    dataIndex: 'position',
    className:'table_style'
  },
  {
    title: 'ชำระ',
    dataIndex: 'modify',
    className:'table_style'
  
  },
  {
    title: 'รายละเอียด',
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
    identity_card:'เงินปันผลหุ้น',
    position:'450 วัน',
    modify:<Button style={{backgroundColor:'#00e6ac',border:'#00e6ac', borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faMoneyBillWave} />
  </Button>,

    delete:<Button style={{backgroundColor:'#ffad33',border:'#ffad33',borderRadius: '0.25em'}}>
    <FontAwesomeIcon style={{color:'white'}} icon={faNewspaper} />
    </Button>
     
   
  },
  {
    key: '2',
    no:'2',
    officer_code:'02457',
    name: 'ปิยะวัช',
    surname:'กุณะมา',
    identity_card:'เงินเฉลี่ยคืนยอดซื้อขายโค',
    position:'365 วัน',
    modify:<Button style={{backgroundColor:'#00e6ac',border:'#00e6ac', borderRadius: '0.25em'}}>
             <FontAwesomeIcon style={{color:'white'}} icon={faMoneyBillWave} />
          </Button>,
    delete:<Button style={{backgroundColor:'#ffad33',border:'#ffad33',borderRadius: '0.25em'}}>
           <FontAwesomeIcon style={{color:'white'}} icon={faNewspaper} />
           </Button>
  },
  {
    key: '3',
    no:'3',
    officer_code:'02458',
    name: 'นครินทร์',
    surname:'มีชม',
    identity_card:'เงินเฉลี่ยคืนยอดซื้ออาหารโค',
    position:'200 วัน',
    modify:<Button style={{backgroundColor:'#00e6ac',border:'#00e6ac', borderRadius: '0.25em'}}>
             <FontAwesomeIcon style={{color:'white'}} icon={faMoneyBillWave} />
          </Button>,
    delete:<Button style={{backgroundColor:'#ffad33',border:'#ffad33',borderRadius: '0.25em'}}>
           <FontAwesomeIcon style={{color:'white'}} icon={faNewspaper} />
           </Button>
  },
  {
    key: '4',
    no:'4',
    officer_code:'02459',
    name: 'มนตรี',
    surname:'เฉลิมถ้อย',
    identity_card:'เงินเฉลี่ยคืนยอดซื้ออุปกรณ์ฟาร์ม',
    position:'300 วัน',
    modify:<Button style={{backgroundColor:'#00e6ac',border:'#00e6ac', borderRadius: '0.25em'}}>
             <FontAwesomeIcon style={{color:'white'}} icon={faMoneyBillWave} />
          </Button>,
    delete:<Button style={{backgroundColor:'#ffad33',border:'#ffad33',borderRadius: '0.25em'}}>
           <FontAwesomeIcon style={{color:'white'}} icon={faNewspaper} />
           </Button>
  },
  {
    key: '5',
    no:'5',
    officer_code:'02460',
    name: 'นันทศักดิ์',
    surname:'กลิ่นนวล',
    identity_card:'เงินเฉลี่ยคืนยอดซื้ออาหารโค',
    position:'400 วัน',
    modify:<Button style={{backgroundColor:'#00e6ac',border:'#00e6ac', borderRadius: '0.25em'}}>
             <FontAwesomeIcon style={{color:'white'}} icon={faMoneyBillWave} />
          </Button>,
    delete:<Button style={{backgroundColor:'#ffad33',border:'#ffad33',borderRadius: '0.25em'}}>
           <FontAwesomeIcon style={{color:'white'}} icon={faNewspaper} />
           </Button>
  },
  {
    key: '6',
    no:'6',
    officer_code:'02461',
    name: 'ณัฐฏ์',
    surname:'ตันโชคช่วง',
    identity_card:'เงินปันผลหุ้น',
    position:'350 วัน',
    modify:<Button style={{backgroundColor:'#00e6ac',border:'#00e6ac', borderRadius: '0.25em'}}>
             <FontAwesomeIcon style={{color:'white'}} icon={faMoneyBillWave} />
          </Button>,
    delete:<Button style={{backgroundColor:'#ffad33',border:'#ffad33',borderRadius: '0.25em'}}>
           <FontAwesomeIcon style={{color:'white'}} icon={faNewspaper} />
           </Button>
  },
];
export default class Tableblacklist extends Component {
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
