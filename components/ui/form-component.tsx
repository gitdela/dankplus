import React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form';
import { Input } from './input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';
import { Button } from './button';
import { Textarea } from './textarea';
import { requestFormschema } from '@/lib/utils';
import { z } from 'zod';

type FormData = z.infer<typeof requestFormschema>;

const FormComponent = ({ form, onSubmit }: { form: any; onSubmit: any }) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <FormField
            control={form.control}
            name='firstname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder='' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='lastname'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder='' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder='' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='address'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='service'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type of Service</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select a type of service' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value='New'>New</SelectItem>
                  <SelectItem value='Repairs'>Repairs</SelectItem>
                  <SelectItem value='Maintenance'>Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className='resize-none'
                  rows={5}
                  placeholder='You can also describe your request here'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p>
          DunkPlus SOLUTIONS is committed to protecting and respecting your
          privacy. We’ll only use your personal information to provide the
          products and services you requested from us and other content that may
          be of interest to you. You can unsubscribe at any time.
        </p>
        <Button
          type='submit'
          className='w-42 py-7 bg-[#002a8a] text-[#f4a700] text-xl rounded-full hover:bg-[#f4a700] hover:text-[#002a8a] transition-all ease-in-out duration-300'
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default FormComponent;
