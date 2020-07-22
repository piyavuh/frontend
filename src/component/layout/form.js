import React,{Component} from 'react';
import { Form, Input,  Select,Row,Col } from 'antd';

const { Option } = Select;



class Demo extends Component {

  render() {
    return (
      <Form  >
       <Row>

       <Col className="gutter-row" span={6}>
        <Form.Item name="gender" label="Gender" >
          <Select
            placeholder="Select a option and change input text above"
           
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        </Col>

        <Col className="gutter-row" span={6}>
        <Form.Item
         
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) => {
            return getFieldValue('gender') === 'other' ? (

              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}
              >
                <Input />

              </Form.Item>
              
              
            ) : null;
          }}
          
        </Form.Item>
        </Col>

        <Col className="gutter-row" span={6}>
        <Form.Item
          
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          {({ getFieldValue }) => {
            return getFieldValue('gender') === 'other' ? (

              <Form.Item
                name="customize"
                label="Customize "
                rules={[{ required: true }]}
              >
                <Input />

              </Form.Item>
              
              
            ) : null;
          }}
          
        </Form.Item>
        </Col>
        </Row>
      </Form>
    );
  }
}
export default Demo;