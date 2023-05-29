// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// const BirthDatePicker = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleDateChange = (event, date) => {
//     if (date) {
//       const selectedDate = date.toISOString().split('T')[0];
//       setSelectedDate(selectedDate);
//     }
//     setShowDatePicker(false);
//   };

//   const handleOpenDatePicker = () => {
//     setShowDatePicker(true);
//   };

//   const handleSave = () => {
//     console.log('Selected Date:', selectedDate);
//   };

//   return (
//     <View>
//       <TextInput
//         style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10}}
//         placeholder="Select birth date"
//         value={selectedDate}
//         onFocus={handleOpenDatePicker}
//         editable={false}
//       />
//       {showDatePicker && (
//         <DateTimePicker
//           value={new Date()}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//         />
//       )}
//       <Button title="Save" onPress={handleSave} />
//     </View>
//   );
// };

// export default BirthDatePicker;
