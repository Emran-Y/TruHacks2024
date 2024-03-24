import React, { useState } from 'react';
import { Steps, Button, Card, Row, Col } from 'antd';
import { SearchOutlined, BulbOutlined, EyeOutlined, HeartOutlined, DownloadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Step } = Steps;

const WizardSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const stepComponents = [
    {
      title: "Start Search",
      icon: <SearchOutlined />,
      description: "Begin your search for books by entering keywords or phrases.",
      image: "https://www.computerhope.com/jargon/s/search-icon.png"
    },
    {
      title: "Explore Recommendations",
      icon: <BulbOutlined />,
      description: "Explore personalized recommendations generated by the AI based on your search query.",
      image: "https://www.freevector.com/uploads/vector/preview/29437/Exploring-Nature.jpg"
    },
    {
      title: "View Search Results",
      icon: <EyeOutlined />,
      description: "Browse through the search results to find the book that matches your interests.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREGuFN2QRveQAdA6RKQgVCYczoov-Ej2TqQ&usqp=CAU"
    },
    {
      title: "Favorite Books",
      icon: <HeartOutlined />,
      description: "Mark your favorite books to easily access them later.",
      image: "https://png.pngtree.com/png-clipart/20220614/ourmid/pngtree-emoji-3d-rendering-favorite-png-image_5007241.png"
    },
    {
      title: "Download Books",
      icon: <DownloadOutlined />,
      description: "Download the selected books to your device for offline reading.",
      image: "https://www.i2clipart.com/cliparts/4/f/1/3/clipart-download-package-256x256-4f13.png"
    }
  ];

  const currentStepComponent = stepComponents[currentStep];

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md p-8 text-center shadow-lg" style={{ transition: 'all 0.3s' }}>
        <div className="text-center mb-8">
          <motion.img 
            src={currentStepComponent.image} 
            alt={currentStepComponent.title} 
            className="mx-auto mb-4 rounded-full" 
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <h2 className="text-xl font-semibold mb-4">{currentStepComponent.title}</h2>
        <motion.p 
          className="text-gray-600 mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentStepComponent.description}
        </motion.p>

        <Row justify="center" gutter={[16, 16]}>
          <Col>
            {currentStep > 0 && (
              <Button onClick={handlePrev}>Previous</Button>
            )}
          </Col>
          <Col>
            {currentStep < 4 ? (
              <Button type="primary" className='bg-blue-500' onClick={handleNext}>Next</Button>
            ) : (
              <Button type="primary" className='bg-blue-500'>Finish</Button>
            )}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default WizardSteps;