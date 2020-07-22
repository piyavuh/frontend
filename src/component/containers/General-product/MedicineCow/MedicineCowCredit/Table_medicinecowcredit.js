import React, { useContext, useState, useEffect, useRef } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'antd/dist/antd.css';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import './medicinecow.css';

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

class Tablemedicinecowcredit extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'ลำดับที่',
        dataIndex: 'no_medicine',
        width:'8%',
        editable: false,
      },
      {
        title: 'รหัสยา',
        dataIndex: 'code_medicine',
        width:'10%',
        editable: true,
      },
      {
        title: 'ชื่อยาทางการค้า',
        width:'16%',
        dataIndex: 'name_medicine_trade',
        editable: true,
        message:'กรุณากรอก',
        
      },
      {
        title: 'ชื่อยาสามัญ',
        width:'16%',
        dataIndex: 'name_medicine_ordinary',
        editable: true,
      },
      {
        title: 'กลุ่มยา',
        width:'12%',
        dataIndex: 'medicine_group',
        editable: true,
      },
      {
        title: 'จำนวน',
        width:'10%',
        dataIndex: 'number_medicine',
        editable: true,
        
      },
      {
        title: 'หน่วย',
        width:'10%',
        dataIndex: 'unit',
        editable: true,
      },
      {
        title: 'ราคา/หน่วย',
        width:'10%',
        dataIndex: 'price_per_unitmedicine',
        editable: true,
      },
      {
        title: 'เป็นเงิน(บาท)',
        width:'10%',
        dataIndex: 'total_money_medicine',
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
      no_medicine: `${count}`,
      code_medicine:`4-ABD`,
      name_medicine_trade:`คาโตซาล 10%`,
      name_medicine_ordinary:`คาโตซาล 10%`,
      medicine_group:`วิตามินแร่ธาตุ`,
      number_medicine:'10',
      unit:'กล่อง',
      price_per_unitmedicine:`100`,
      total_money_medicine:'5,000',

      
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
          เพิ่มรายการยา
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

export default Tablemedicinecowcredit;