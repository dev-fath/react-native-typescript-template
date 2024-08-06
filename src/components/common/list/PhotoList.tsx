// import React from 'react';
//
// import { Pressable, View, FlatList, StyleSheet, Image, ImageURISource } from 'react-native';
//
// import type { Image as CropImageType } from 'react-native-image-crop-picker';
//
// import IconBase from 'components/common/icons';
// import { Typography } from 'components/common/typography/Typography';
//
// import { ColorCodes } from 'constants/colors';
//
// export interface IPhotoSize {
//   width: number,
//   height: number,
// }
//
// export interface IPhotoListProps {
//   photos: CropImageType[],
//   maxContainingCount: number,
//   showOnly?: boolean,
//   needCameraButton?: boolean,
//   onPressButton?: () => void,
//   onPressDeleteButton?: (index: number) => void
//   size: IPhotoSize,
// }
//
// export default function PhotoList ({
//   photos,
//   maxContainingCount,
//   needCameraButton,
//   onPressButton,
//   onPressDeleteButton,
//   showOnly = false,
//   size,
// }:IPhotoListProps) {
//
//   const renderPhotoList = (item: CropImageType, index: number) => {
//     const imageSrc: ImageURISource = {
//         uri: item.path,
//         width: size.width,
//         height: size.height,
//       };
//
//     return (
//       <View
//         key={index}
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'flex-start',
//           marginVertical: 10,
//           height: size.height
//         }}
//       >
//         { !showOnly && needCameraButton && photos.length < maxContainingCount && index === 0 &&
//           <Pressable onPress={onPressButton}>
//             <View style={[styles.addingPhotoButton, { width: size.width, height: size.height }]}>
//               <IconBase icon={'addingPhoto'} width={24} height={24} color={'#FFFFFF'} />
//             </View>
//           </Pressable>
//         }
//         <View style={{
//           borderRadius: 11,
//           marginRight:10
//         }}>
//           <Image source={imageSrc} style={{ borderRadius: 11 }} />
//           <Pressable
//             onPress={() => onPressDeleteButton(index)}
//             style={styles.deletePhotoButton}
//             hitSlop={16}
//           >
//             <IconBase icon={'close'} width={16} height={16} color={'#FFFFFF'} />
//           </Pressable>
//         </View>
//       </View>
//     );
//   };
//
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <FlatList
//         horizontal={true}
//         data={photos}
//         renderItem={({ item, index }) => renderPhotoList(item, index)}
//       />
//       {!showOnly &&
//         <View style={styles.capaText}>
//           <Typography.TextRegular2>
//             {`${photos.length}/${maxContainingCount}`}
//           </Typography.TextRegular2>
//         </View>
//       }
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   addingPhotoButton: {
//     backgroundColor: ColorCodes.mintGreen,
//     borderRadius: 11,
//     marginRight:10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   deletePhotoButton: {
//     top: 8,
//     right: 8,
//     width: 16,
//     height: 16,
//     position: 'absolute'
//   },
//   capaText: {
//     marginLeft:6,
//     justifyContent: 'flex-end',
//     alignItems:'baseline',
//     paddingBottom: 4
//   }
// });
