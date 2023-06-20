import React, { memo } from 'react'
import  NepaliDate  from 'nepali-date-converter';
import Common from '../../common';

const DaysSelect=({date,handleDateChange,indata})=>{
    const handleAdd=(item)=>{
        if(item.target.value){
                const jsDate = new Date(date);
                const nepaliDate = new NepaliDate(jsDate.getFullYear(), jsDate.getMonth() , jsDate.getDate());
                const minYear = date;
                const maxYear = indata;
                const bsYear = nepaliDate.getYear();
                console.log('bsYear',bsYear)
                if (bsYear < minYear || bsYear > maxYear) {
                  return Common.notifications('Error',' Date is out of range for Nepali calendar!','error');
                }
                const jsYear = nepaliDate.getYear() + 57; // Convert Nepali year to AD
                const jsMonth = nepaliDate.getMonth() - 1;
                const jsDay = nepaliDate.getDate();
                const jsDateObj = new Date(jsYear, jsMonth, jsDay);
                jsDateObj.setDate(jsDateObj.getDate() - item.target.value); // Add 20 days
                const nepaliYear = jsDateObj.getFullYear() - 57; // Convert AD year to Nepali
                const nepaliMonth = jsDateObj.getMonth() + 1;
                const nepaliDay = jsDateObj.getDate();
                const newNepaliDate = new NepaliDate(nepaliYear, nepaliMonth, nepaliDay);
                const nepaliDateString = newNepaliDate.format('YYYY-MM-DD');
                handleDateChange(nepaliDateString);
            
        }else{
            handleDateChange(indata);

        }
        
          }
    return(
        <div>
        <Common.Inputs type="number" onChange={handleAdd}  label="Select days" hidelabel/>
      </div>
    )
}
export default memo(DaysSelect)