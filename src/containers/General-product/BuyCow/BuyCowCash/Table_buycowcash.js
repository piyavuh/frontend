import React, { useContext, useState, useEffect, useRef } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'antd/dist/antd.css';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import './buycow.css';

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

class Tablebuycowcash extends React.Component {
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
        title: 'เบอร์โค',
        width:'10%',
        dataIndex: 'number_cow',
        editable: true,
        message:'กรุณากรอก',
        
      },
      {
        title: 'พันธุ์',
        width:'10%',
        dataIndex: 'breed_cow',
        editable: true,
      },
      {
        title: 'เพศ',
        width:'10%',
        dataIndex: 'sex_cow',
        editable: true,
      },
      {
        title: 'น้ำหนัก(กก.)',
        width:'10%',
        dataIndex: 'weight',
        editable: true,
        
      },
      {
        title: 'เป็นเงิน(บาท)',
        width:'10%',
        dataIndex: 'total_buycow_cash',
        editable: true,
      },
      {
        title: 'เบอร์โคเดิม',
        width:'10%',
        dataIndex: 'number_cow_original',
        editable: true,
      },
      {
        title: 'เกิด',
        width:'10%',
        dataIndex: 'birthday_cow',
        editable: true,
      },
      {
        title: 'หมายเหตุ',
        width:'10%',
        dataIndex: 'note',
        editable: true,
      },
      {
        title: 'ลบ',
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
      number_cow:`000000`,
      breed_cow:`พันธุ์`,
      sex_cow:`เพศ`,
      weight:'000',
      total_buycow_cash:'00000',
      number_cow_original:'000000',
      birthday_cow:'00-00-0000',
      note:'-',

      
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
          เพิ่มโค (1 ตัว)
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

export default Tablebuycowcash;