
const  CustomHeader=(props)=> {
    const { date, decreaseMonth, increaseMonth, today } = props;
   console.log('custome header')
    function handlePrevious() {
      // Custom logic for previous button click
      console.log('Previous button clicked!');
      decreaseMonth();
    }
  
    function handleNext() {
      // Custom logic for next button click
      console.log('Next button clicked!');
      increaseMonth();
    }
  
    function handleToday() {
      // Custom logic for today button click
      console.log('Today button clicked!');
      today();
    }
  
    return (
      <div className="custom-header bg-red">
        <button onClick={handlePrevious}>Custom Previous</button>
        <span>{date.format('MMMM YYYY')}</span>
        <button onClick={handleNext} className='bg-[black]'>Custom Next</button>
        <button onClick={handleToday}>Custom Today</button>
      </div>
    );
  }
  export default CustomHeader