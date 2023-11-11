import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const UserPhotoDetails = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      UserPhotoDetails {id} {photoId}
    </div>
  );
};

export default UserPhotoDetails;
