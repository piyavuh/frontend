import React, { useContext, useState, useEffect, useRef } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'antd/dist/antd.css';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import './semencowcash.css';

const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async e => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `กรุณากรอก${title} `,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class Tablemedicinecowcash extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'ลำดับที่',
        dataIndex: 'no_cow',
        width:'8%',
        editable: false,
      },
      {
        title: 'หมายเลขน้ำเชื้อ/ชื่อพ่อพันธุ์',
        width:'20%',
        dataIndex: 'no_semen',
        editable: true,
        message:'กรุณากรอก',
        
      },
      {
        title: 'เบอร์ประจำตัวพ่อพันธุ์',
        width:'14%',
        dataIndex: 'breeder_number',
        editable: true,
      },
      {
        title: 'สายพันธุ์',
        width:'14%',
        dataIndex: 'strain',
        editable: true,
      },
      {
        title: 'จำนวน',
        width:'10%',
        dataIndex: 'amount_semen',
        editable: true,
        
      },
      {
        title: 'หน่วย',
        width:'10%',
        dataIndex: 'unit_semen',
        editable: true,
      },
      {
        title: 'ราคา/หน่วย',
        width:'10%',
        dataIndex: 'price_per_unitsemen',
        editable: true,
      },
      {
        title: 'เป็นเงิน(บาท)',
        width:'10%',
        dataIndex: 'total_buysemencow_cash',
        editable: true,
      },
      {
        title: 'ลบ',
        width:'10%',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="คุณต้องการลบ" onConfirm={() => this.handleDelete(record.key)}>
              <Button style={{backgroundColor:'#ff3333',border:'#ff3333',borderRadius: '0.25em'}}>
           <FontAwesomeIcon style={{color:'white'}} icon={faTrashAlt} />
           </Button>
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
       
       
      ],
      count: 1,
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter(item => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      no_cow: `${count}`,
      no_semen:`MANSO68`,
      breeder_number:`23`,
      strain:`แองกัส`,
      amount_semen:'2',
      unit_semen:'หลอด(โด๊ส)',
      price_per_unitsemen:`1,000`,
      total_buysemencow_cash:'2,000',
      
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div style={{margin:'30px 60px'}}>
        <Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          เพิ่มรายการน้ำเชื้อ
        </Button>
        <Table 
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
         <div style={{paddingTop:'20px',paddingBottom:'10px',textAlign:'center'}}>
          
          <Form.Item 
           name="list_sellcowfatten" 
           >
         <label  style={{marginRight:'60px'}}>รวม</label>
       <Input style={{width:'10%'}}/>
         <label style={{marginLeft:'40px'}}>รายการ</label>
       </Form.Item>
       <Form.Item 

       name="totalmoney_sellcowfatten" 
     
       >
       <label  style={{marginRight:'40px'}}>เป็นเงิน</label>
       <Input style={{width:'10%'}}/>
       <label style={{marginLeft:'40px'}}>บาท</label>
       </Form.Item>

     
       </div>
      </div>
    );
  }
}

export default Tablemedicinecowcash;