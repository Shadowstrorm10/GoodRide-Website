// // app/signup/page.tsx

// "use client";

// import { useState } from 'react';
// import Link from 'next/link';

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [accountType, setAccountType] = useState('');
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleAccountTypeChange = (type: string) => {
//     setAccountType(type);
//     setDropdownOpen(false); // Close dropdown after selection
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     // Basic validation
//     if (!formData.name || !formData.email || !formData.password || !accountType) {
//       setError('All fields are required.');
//       return;
//     }

//     // Send data to the backend (API endpoint to be created as in the previous example)
//     try {
//       const response = await fetch('/api/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ ...formData, accountType })
//       });

//       if (!response.ok) {
//         throw new Error('Sign up failed');
//       }

//       const data = await response.json();
//       setSuccess('Sign up successful! Please check your email for confirmation.');
//       setFormData({ name: '', email: '', password: '' });
//       setAccountType(''); // Reset account type
//     } catch (err) {
//       setError(err.message || 'Something went wrong.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black text-white">
//       <div className="bg-gray-800 p-6 rounded-md w-96">
//         <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">{success}</p>}
        
//         {/* Account Type Dropdown */}
//         <div className="mb-4 relative">
//           <button 
//             onClick={() => setDropdownOpen(!isDropdownOpen)} 
//             className="w-full p-2 rounded bg-white text-black font-bold"
//           >
//             {accountType || 'Select Account Type'}
//           </button>
//           {isDropdownOpen && (
//             <div className="absolute left-0 right-0 mt-1 bg-white rounded shadow-lg">
//               <button 
//                 onClick={() => handleAccountTypeChange('Regular Account')} 
//                 className="w-full text-left p-2 hover:bg-gray-200"
//               >
//                 Create Account
//               </button>
//               <button 
//                 onClick={() => handleAccountTypeChange('Rider Account')} 
//                 className="w-full text-left p-2 hover:bg-gray-200"
//               >
//                 Rider Account
//               </button>
//               {/* You can add more account types here */}
//             </div>
//           )}
//         </div>

//         {/* Name, Email, and Password Fields */}
//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="name">Name</label>
//           <input 
//             type="text" 
//             name="name" 
//             value={formData.name} 
//             onChange={handleChange} 
//             className="w-full p-2 rounded" 
//             required 
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="email">Email</label>
//           <input 
//             type="email" 
//             name="email" 
//             value={formData.email} 
//             onChange={handleChange} 
//             className="w-full p-2 rounded" 
//             required 
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-1" htmlFor="password">Password</label>
//           <input 
//             type="password" 
//             name="password" 
//             value={formData.password} 
//             onChange={handleChange} 
//             className="w-full p-2 rounded" 
//             required 
//           />
//         </div>
//         <button type="submit" onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
//           Sign Up
//         </button>
//         <p className="mt-4">
//           Already have an account? <Link href="/login" className="text-blue-400">Log in</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
