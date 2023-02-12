import { useState } from 'react';

const withValidate = (WrapComp) => {
   function FormData() {
      const [dataSubmit, setDataSubmit] = useState({});
      const [errors, setErrors] = useState({});
      const reciveData = (data) => {
         setDataSubmit((prev) => ({ ...prev, ...data }));
      };
      const handleOnChange = (e) => {
         const { name, value } = e.target;
         setDataSubmit((data) => ({ ...data, [name]: value }));
      };
      const handleSubmit = (e) => {
         e.preventDefault();
         console.log(dataSubmit);
      };
      const handleValidate = (e) => {
         const errorList = validate(errors, e.target.name, e.target.value, e.target.pattern);
         setErrors(errorList);
      };
      const handleOnInput = (e) => {
         setErrors({ ...errors, [e.target.name]: '' });
      };
      const checkDataSubmit = () => {
         if (Object.keys(dataSubmit).length === 0) return false;
         for (const value of Object.values(dataSubmit)) {
            if (value === '') return false;
         }
         return true;
      };
      //pattern: String of regex, delete pair of '//' in regex.
      const validate = (initData, name, value, pattern) => {
         const regex = new RegExp(pattern, 'g');
         let errors = { ...initData };
         if (!regex.test(value)) {
            errors[name] = true;
         } else {
            errors[name] = false;
         }
         return errors;
      };
      const props = {
         dataSubmit,
         setDataSubmit,
         errors,
         setErrors,
         reciveData,
         handleOnChange,
         handleOnInput,
         handleValidate,
         handleSubmit,
         checkDataSubmit,
      };
      return <WrapComp props={props} />;
   }
   return FormData;
};

export default withValidate;
