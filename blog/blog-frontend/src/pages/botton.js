// // import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import BottomNavigation from '@mui/material/BottomNavigation';
// // import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// // // import RestoreIcon from '@mui/icons-material/Restore';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';



// // export default function SimpleBottomNavigation() {
// //     const [value, setValue] = React.useState(0);
  
// //     return (
// //       <Box sx={{ width: 500 }}>
// //         <BottomNavigation
// //           showLabels
// //           value={value}
// //           onChange={(event, newValue) => {
// //             setValue(newValue);
// //           }}
// //         >
// //           <BottomNavigationAction label="Recents"/>  <FontAwesomeIcon icon={faHeart} /> 

    

// //           <BottomNavigationAction label="Favorites" /> 
// //             {/* icon={<FavoriteIcon />} */}
// //           <BottomNavigationAction label="Nearby"  />
// //           {/* icon={<LocationOnIcon />} */}
// //           <button type="submit">
// //         <FontAwesomeIcon icon={faHeart} />
// //       </button>
// //         </BottomNavigation>
// //       </Box>
// //     );
// //   }

// import * as React from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// // import FolderIcon from '@mui/icons-material';
// // import RestoreIcon from '@mui/icons-material';
// // import FavoriteIcon from '@mui/icons-material';
// // import LocationOnIcon from '@mui/icons-material';

// export default function LabelBottomNavigation() {
//   const [value, setValue] = React.useState('recents');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
//       <BottomNavigationAction
//         label="Recents"
//         value="recents"
//          />
        
//       <BottomNavigationAction
//         label="Favorites"
//         value="favorites"
       
//       />
//       <BottomNavigationAction
//         label="Nearby"
//         value="nearby"
      
//       />
//       <BottomNavigationAction label="Folder" value="folder"  />
//     </BottomNavigation>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents"  color="red"/>
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby"  />
        <BottomNavigationAction label="Nearby"  />
        
      </BottomNavigation>
    </Box>
  );
}