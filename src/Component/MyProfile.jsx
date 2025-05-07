import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, updateUserProfile, setUser } = use(AuthContext);
  const fullDate = "Wed, 07 May 2025 13:04:17 GMT";
  const slicedDate = fullDate.slice(0, 16);
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
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          return;
        });
      }
    );
    
  };
  return (
    <div>
      <div className="flex flex-col mt-10 mb-10 mx-auto justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 card-bg">
        <img
          src={user.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full  aspect-square"
        />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-bold sm:text-2xl font ">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-sm ">
                  {user.emailVerified ? (
                    <img
                      className="w-5"
                      src="https://cdn-icons-png.flaticon.com/128/6364/6364343.png"
                    />
                  ) : (
                    "Not Verified"
                  )}
                </span>
                {user.displayName}
              </div>
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600 paragraph">
              {user.email}
            </p>
            <p className="paragraph">Joined: {slicedDate}</p>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto mb-10 card-bg rounded-2xl">
        <div className="flex flex-col max-w-lg p-6 rounded-md sm:p-10 ">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold font">Update Profile</h1>
            <p className="text-sm dark:text-gray-600 font">
              Update Your Profile
            </p>
          </div>

          <form onSubmit={handleUpdateUserProfile} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm paragraph">
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
                  <label htmlFor="password" className="text-sm paragraph">
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
                  className="w-full px-8 py-3 font-semibold rounded-md main-btns font"
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
