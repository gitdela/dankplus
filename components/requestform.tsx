import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormComponent from './ui/form-component';
import { requestFormschema } from '@/lib/utils';

type FormData = z.infer<typeof requestFormschema>;

const RequestForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(requestFormschema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className='w-full bg-[#ffffff] text-gray-800' id='request'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-center py-10'>
          Request a Service
        </h1>
        <FormComponent form={form} onSubmit={onSubmit} />
      </div>
    </section>
  );
};

export default RequestForm;
