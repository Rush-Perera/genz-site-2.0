import { collection, addDoc } from "firebase/firestore"; 
import db from "../config";
// import sendEmailtoClient from "@/app/mail/admin/send-email";
// pages/contact.js (or your component file)

async function handleSubmit(docRef) {
 
  
    const formData = new FormData();
    formData.append(docRef.name, docRef.name);
    formData.append(docRef.email, docRef.email);
    formData.append(docRef.subject, docRef.subject);
    formData.append(docRef.phone, docRef.phone);
    formData.append(docRef.message, docRef.message);
    const response = await fetch('../../api/send-email', {
      method: 'POST',
      body: formData,
    });
  
    const data = await response.json();
  
    if (response.ok) {
      console.log('Email sent successfully!');
      // Display success message to user
    } else {
      console.error('Failed to send email:', data.error);
      // Display error message to user
    }
  }
  

export default async function submitForm(data) {
    let error = null;
    let result = "";
    try {
        const docRef = await addDoc(collection(db, "genz-contact-form"), {
            name: data.name,
            email: data.email,
            subject: data.subject,
            phone: data.phone,
            message: data.message,
        });
        console.log("Document written with ID: ", docRef.id);
        result = docRef.id;
        handleSubmit(docRef);
        // sendEmailtoClient(data);
      } catch (e) {
        console.error("Error adding document: ", e);
        error = e;
      }

      return {result,error}

}