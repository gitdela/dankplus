import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className='max-w-7xl mx-auto py-20 px-4 lg:px-0'>
      <div className='flex flex-wrap justify-center items-center gap-20'>
        <div className='w-full'>
          <h1 className='text-center text-4xl pb-10 mb-4'>
            Your Questions Answered!
          </h1>
          <Accordion
            type='multiple'
            className='w-full flex flex-col gap-4 items-start'
          >
            <AccordionItem value='item-1' className='w-full py-2 md:px-4'>
              <AccordionTrigger className='text-start text-base font-semibold hover:no-underline md:text-lg'>
                Question 1
              </AccordionTrigger>
              <AccordionContent className='leading-loose text-sm md:text-base text-gray-700'>
                Answer 1
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2' className='w-full py-2 md:px-4'>
              <AccordionTrigger className='text-start text-base font-semibold hover:no-underline md:text-lg'>
                Question 2
              </AccordionTrigger>
              <AccordionContent className='leading-loose text-sm md:text-base text-gray-700'>
                Answer 2
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3' className='w-full py-2 md:px-4'>
              <AccordionTrigger className='text-start text-base font-semibold hover:no-underline md:text-lg'>
                Question 3
              </AccordionTrigger>
              <AccordionContent className='leading-loose text-sm md:text-base text-gray-700'>
                Answer 3
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4' className='w-full py-2 md:px-4'>
              <AccordionTrigger className='text-start text-base font-semibold hover:no-underline md:text-lg'>
                Question 4
              </AccordionTrigger>
              <AccordionContent className='leading-loose text-sm md:text-base text-gray-700'>
                Answer 4
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5' className='w-full py-2 md:px-4'>
              <AccordionTrigger className='text-start text-base font-semibold hover:no-underline md:text-lg'>
                Question 5
              </AccordionTrigger>
              <AccordionContent className='leading-loose text-sm md:text-base text-gray-700'>
                Answer 5
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
