'use client'
import React from "react"
import {useState, useEffect} from 'react'
import {useLanguage} from "@/context/LanguageContext"
import api from "@/lib/api"

export default function DashboardPage() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categorydata, setCategorydata] = useState({
    name: '', 
    short_description: '',  // Changed from 'description' to match your API
    button_text: '',
    
  });
  const [editingId, setEditingId] = useState(null);
 

const editCategory = (category) => {
  setEditingId(category.id);

  setCategorydata({
    name: category.name,
    short_description: category.short_description,
    button_text: category.button_text,
  });
};

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get('/category_data/');
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    }
    fetchCategories();
  }, [])

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategorydata((currentcategory) => ({
      ...currentcategory,
      [name]: value
    }));
  }

  const addCategory = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await api.post('/category_data/', categorydata);
      // ✅ Add the new category to the existing list
      setCategories([...categories, response.data]);
      // Clear the form
      setCategorydata({ name: '', short_description: '', button_text: '' });
      console.log('Category added:', response.data);
    } catch (error) {
      console.error('Error adding category:', error);
    }finally{
      setIsLoading(false);
    }
  }


const deleteCategory = async (id) => {
  try {
    await api.delete(`/category_data/${id}/`);

    setCategories((currentcategory) =>
      currentcategory.filter((category) => category.id !== id)
    );

    console.log("Deleted successfully");
  } catch (error) {
    console.error("Error deleting category:", error);
  }
};

const updateCategory = async (id) => {

  try {
    const response = await api.put(`/category_data/${id}/`, categorydata);
    setCategories((currentcategory) =>
      currentcategory.map((category) =>
        category.id === id ? { ...category, ...response.data } : category
      )
    );
    console.log("Updated successfully");
  } catch (error) {
    console.log(error.response.data);
}
};




  return (
    <div>
      <h1 className="text-3xl text-blue-500 font-bold flex justify-center items-center mt-10">Dashboard</h1>
    
      <div>
        <h1 className="text-xl text-orange-500 font-bold ml-10 mt-10">Add Category Data</h1>
        
        {/* ✅ Added onSubmit to the form */}
        <form className="flex flex-col" onSubmit={addCategory}>
          <input 
            type="text" 
            name="name" 
            placeholder="Enter Category Name"  
            className="border border-gray-300 rounded-lg px-4 py-2 w-64 ml-10 mb-4"
            value={categorydata.name}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            name="short_description"  // Changed to match your API field
            placeholder="Enter Category Description" 
            className="border border-gray-300 rounded-lg px-4 py-2 w-64 ml-10 mb-4"
            value={categorydata.short_description}
            onChange={handleInputChange}
            required
          />
          <input 
            type="text" 
            name="button_text" 
            placeholder="Enter Button Text" 
            className="border border-gray-300 rounded-lg px-4 py-2 w-64 ml-10 mb-4"
            value={categorydata.button_text}
            onChange={handleInputChange}
            required
          />
          <button 
            type="submit"  // ✅ Added type="submit"
            className="bg-orange-500 rounded-md hover:bg-orange-800 hover:text-white transition-all text-black p-2 ml-10 font-medium w-44"
          >
            Add Category
          </button>
       <button
  type="button"
  onClick={() => updateCategory(editingId)}
>
  Update Category
</button>
     
        </form>

        {/* Table with proper structure */}
        <table className="mt-10 ml-10">
          <thead className="bg-orange-500 text-black">
            <tr className="border border-white">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Category Name</th>
              <th className="px-4 py-2">Category Description</th>
              <th className="px-4 py-2">Button Text</th>
              <th className="px-4 py-2">Articles_Count</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border border-gray-300">
                <td className="px-4 py-2">{category.id}</td>
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2">{category.short_description}</td>
                <td className="px-4 py-2">{category.button_text}</td>
                <td className="px-4 py-2">{category.article_count || 0}</td>
                <td>   <button
          onClick={() => deleteCategory(category.id)}
          className="bg-red-600 px-3 py-1 rounded text-white"
        >
          Delete
        </button></td>
        <td>
       <button
  onClick={() => editCategory(category)}
  className="bg-orange-500 px-3 py-1 rounded text-white"
>
  Edit
</button>
        </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}