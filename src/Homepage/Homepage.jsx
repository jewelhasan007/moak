"use client"
import React from 'react';
import Section from './Section';
import Swal from 'sweetalert2';


const Homepage = () => {
     const handleAddSection = () =>{
        console.log('handleAddSection hitted')
        Swal.fire({
            title: "Add New Sections",
            input: "text",
            inputAttributes: {
              autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Add",
            showLoaderOnConfirm: true,
            preConfirm: async (login) => {
              try {
                const githubUrl = 'http://localhost:3000/component/sections/api';
                const response = await fetch(githubUrl);
                if (!response.ok) {
                  return Swal.showValidationMessage(`
                    ${JSON.stringify(await response.json())}
                  `);
                }
                return response.json();
              } catch (error) {
                Swal.showValidationMessage(`
                  Request failed: ${error}
                `);
              }
            },
            allowOutsideClick: () => !Swal.isLoading()
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: `${result.value.login}'s avatar`,
                imageUrl: result.value.avatar_url
              });
            }
          });
     }

    return (
        <div>
           <Section></Section>
          
        
        </div>
    );
};

export default Homepage;