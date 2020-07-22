import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd';
import './Edit.css';

const columns = [
  
  {
    title:'ลำดับที่',
    width:'10%',
    dataIndex: 'no',
    className:'table_style'
    
    
  },
  {
    title: 'ชื่อเจ้าหน้าที่',
    dataIndex: 'name_officer',
    className:'table_style'
    
  },
  {
    title: 'กิจกรรม',
    dataIndex: 'activity',
    className:'table_style'
  },
  {
    title: 'เวลา',
    dataIndex: 'date',
    className:'table_style'
  },
  
];

const data = [
  {
    key: '1',
    no:'1',
    name_officer: 'นายสมเกียรติ จันทะน้อย',
    activity:'คำนวณเงินปันผลให้ นายอานนท์ ตรีชยวงศ์',
    date:'2020-07-10 03:30 PM'
   
  },
  {
    key: '2',
    no:'2',
    name_officer: 'นายปิยวัช กุณะมา',
    activity:'คำนวณเงินปันผลให้ นางสาวสมหญิง มานะ',
    date:'2020-06-9 01:30 PM'
  },
  {
  key: '3',
    no:'3',
    name_officer: 'นายนครินทร์ มีชม',
    activity:'คำนวณเงินเฉลี่ยคืนให้ นางสาวมานิตา มาแก้ว',
    date:'2020-07-10 03:30 PM'
  },
  {
    key: '4',
    no:'4',
    name_officer: 'นายมนตรี เฉลิมถ้อย',
    activity:'คำนวณเงินปันผลให้ นางสาวสมหญิง มานะ',
    date:'2020-07-10 03:30 PM'
  },
  {
    key: '5',
    no:'5',
    name_officer: 'นายนันทศักดิ์ กลิ่นนวล',
    activity:'คำนวณเงินเดือนให้ นายสมชาย อุทัย',
    date:'2020-07-10 03:30 PM'
  },
  {
    key: '6',
    no:'6',
    name_officer: 'นายณัฐฎ์ ตันโชคช่วง',
    activity:'อนุมัติการสมัครสมาชิกให้ นายภาณุเดชช แสนเพชร',
    date:'2020-07-10 03:30 PM'
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
