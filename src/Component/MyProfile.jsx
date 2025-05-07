import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, updateUserProfile, setUser } = use(AuthContext);

  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const newPhoto = e.target.photo.value;

    updateUserProfile({ displayName: name, photoURL: newPhoto }).then(
      (result) => {
        Swal.fire({
          title: "Your Profile Updated",
          icon: "success",
          draggable: true,
        });
        setUser({ displayName: name, photoURL: newPhoto }).catch((error) => {
          return;
        });
      }
    );
    
  };
  return (
    <div>
      <div className="flex flex-col mt-10 mb-10 mx-auto justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
        <img
          src={user.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              {user.email}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto mb-10">
        <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Update Profile</h1>
            <p className="text-sm dark:text-gray-600">Update Your Profile</p>
          </div>

          <form onSubmit={handleUpdateUserProfile} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm">
                    Image Url
                  </label>
                </div>
                <input
                  required
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Your Image Url"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
