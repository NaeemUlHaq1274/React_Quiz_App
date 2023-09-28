import Accordion from 'react-bootstrap/Accordion';

function AccordionComponent({data}) {
    console.log(data)
  return (
    <Accordion alwaysOpen style={{border:"2px solid e2e8f0"}}>
        {data.map((singleData,index)=>(
            <Accordion.Item eventKey={index} >
                <Accordion.Header>{singleData.question}</Accordion.Header>
                <Accordion.Body>{singleData.answer}</Accordion.Body>
            </Accordion.Item>
        ))}
    </Accordion>
  );
}

export default AccordionComponent;