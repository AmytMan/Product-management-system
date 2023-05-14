import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateProductMutation } from '../../features/productSlice/ProductApi';
import { useGetCategoriesQuery } from '../../features/fetchCategory/CategoryApi';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import {BsArrowLeftShort} from 'react-icons/bs'
import './AddForm.css';

function AddForm() {
  
  const {currentData} = useGetCategoriesQuery();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [createProduct, { data, isLoading }] = useCreateProductMutation();
  const [title, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [images, setimages] = useState('');
  
  const onSubmits = async (e) => {
    const post = { 
      title,
      description,
      price, 
      categoryId,
      images:[images]
    };
    
    try {
      await createProduct(post);
      reset();
    } catch (error) {
      console.error(error);      
    }
  };
  
  return (
    <div className='d-flex justify-content-center align-items-center mx-4'>
      <div className='container'>
        <div className='my-4  '>
          <Link to='/dashboard' className=' border bg-white rounded p-2 text-dark text-decoration-none'> <BsArrowLeftShort/>Back to Dashboard</Link> 
        </div>

        <form onSubmit={handleSubmit(onSubmits)}>
          <label htmlFor="title">Product Name</label>
          <input {...register("title", { required: true })} type='text' id='title'  placeholder="enter the product name"
          onChange={(event) => setName(event.target.value)}/>
          {errors.title && <span className='error_message'>This section is Required !</span>}

          <label htmlFor="description">Description </label>
          <input type='text' id='description' {...register("description", { required: true })} placeholder='write short description'
            onChange={(event) => setDescription(event.target.value)} />
          {errors.description && <span className='error_message'>This section is Required !</span>}

          <label htmlFor="price">Price</label>
          <input type="number" id='price' {...register("price", { required: true })} placeholder='$'
            onChange={(event) => setPrice(event.target.value)} />
          {errors.price && <span className='error_message'>This section is Required !</span>}

          <label htmlFor="category">Category</label>
          <select id="category" {...register("categoryId", { required: true })}t onChange={(event) => setCategoryId(event.target.value)}>
          {currentData && currentData.map((items)=>(
          <option key={items.id} value={items.id}>{items.name}</option>
          ))}
          </select>
          {errors.categoryId && (
            <span className='error_message'>This section is Required !</span>
          )}

          <label htmlFor="images">images</label>
          <input type="text" id='images' {...register("images",{ required: true })} placeholder='enter the valid url of image'
           onChange={(event)=> setimages(event.target.value)}/>
          {errors.images && (<span className='error_message'>This section is Required !</span>)}

          <button type='submit'>
            {isLoading ? "Adding..." :"Add"}
          </button>

        </form>
      </div>
      <div>

        {data ? 

        <div>
          <Card key={data.id} style={{ width: '24rem' }} className=' m-4 p-4'>
            <Card.Img variant='top' src={data.images} style={{width:'20rem'}}/>
            <Card.Body className='text-black'>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.description}</Card.Text>
              <Card.Title>$ {data.price}</Card.Title>
              <Card.Text>{data.category.name}</Card.Text>             
            </Card.Body>
          </Card>
         </div>
        :''}
      </div>
    </div>
  );
}

export default AddForm;
