import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { ROUTES } from '../../routes/RouterConfig'
import Footer from '../../components/Footer'
import Header2 from '../../components/Header2'

/**
 * 
 * @param {{onClickNext:()=>void,onClickBack:()=>void}} props 
 * @returns 
 */
const Document = (props) => {

  const { onClickNext, onClickBack } = props;

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className='Login'>
      <Header2
        idx={2}
        onClickBack={onClickBack}
      />
      <div className='py-16'>
        <div className='lg:w-8/12 md:w-8/12 sm:w-8/12 w-full m-auto mt-12'>
          <h2 className='font-semibold text-4xl my-8 text-center pb-12'>Documents</h2>
          <Form>
            <Container fluid="sm">
              <Row>
                <Col sm='6'>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Licence Type</Form.Label>
                    <Form.Select aria-label="Licence Type" className='rounded-md h-10 mb-8'>
                      <option>Licence Type</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Licence Number</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter Licence Number" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>PAN Number</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter PAN Number" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>GSTIN Number</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="text" placeholder="Enter GSTIN Number" />
                  </Form.Group>
                </Col>
                <Col sm='6'>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'> Expiry Date</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="date" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Upload Certificate</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="file" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Upload PAN Card Image</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="file" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className='font-semibold'>Upload GST Certificate</Form.Label>
                    <Form.Control className='rounded-md h-10 mb-8' type="file" />
                  </Form.Group>

                </Col>
                <div className='text-center'>
                  <Button
                    onClick={onClickNext}
                    className='bg-[#0d6efd] rounded-full w-32 mt-12' variant="primary">Next</Button>
                </div>
              </Row>
            </Container>
          </Form>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Document