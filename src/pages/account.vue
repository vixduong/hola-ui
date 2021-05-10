<template>
  <div class="md:w-[680px] mx-2 md:mx-auto my-8">
    <form action="" class="flex flex-col space-y-8">
      <section class="space-y-4">
        <h2 class="font-bold text-xl">Profile</h2>

        <div class="flex space-x-2">
          <div class="w-3/10 flex items-center justify-center">
            <img ix-src="https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=128&amp;w=128" sizes="128px" class="upload-circular__image upload-circular__image--large js-general-uploader-new-upload-target" srcset="https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=100&amp;w=100 100w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=200&amp;w=200 200w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=300&amp;w=300 300w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=320&amp;w=320 320w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=400&amp;w=400 400w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=500&amp;w=500 500w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=576&amp;w=576 576w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=600&amp;w=600 600w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=640&amp;w=640 640w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=700&amp;w=700 700w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=720&amp;w=720 720w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=750&amp;w=750 750w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=768&amp;w=768 768w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=800&amp;w=800 800w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=900&amp;w=900 900w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=940&amp;w=940 940w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=1000&amp;w=1000 1000w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=1024&amp;w=1024 1024w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=1080&amp;w=1080 1080w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=1100&amp;w=1100 1100w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=1140&amp;w=1140 1140w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=1152&amp;w=1152 1152w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=1200&amp;w=1200 1200w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=1242&amp;w=1242 1242w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=1300&amp;w=1300 1300w, https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=imgixjs-3.3.2&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=1366&amp;w=1366 1366w" src="https://images.unsplash.com/profile-fb-1540213965-7c685157e126.jpg?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;h=128&amp;w=128" ix-initialized="ix-initialized">
          </div>
          <div class="flex-1">
            <div
              flex="~"
              class="space-x-0 space-y-2 flex-col sm:(flex-row space-x-8 space-y-0)"
            >
              <div flex="1">
                <div flex="~ col" class="space-y-2">
                  <label for="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    ring="1 black"
                    border="none rounded-md"
                  />
                </div>
              </div>
              <div flex="1">
                <div flex="~ col" class="space-y-2">
                  <label for="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    ring="1 black"
                    border="none rounded-md"
                  />
                </div>
              </div>
            </div>
            <div flex="~ col" class="space-y-2">
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                ring="1 black"
                border="none rounded-md"
              />
            </div>
            <div flex="~ col" class="space-y-2">
              <label for="usermane"
                >Usermane
                <span text="gray-500"
                  >(only letters, numbers, and underscores)</span
                ></label
              >
              <input
                type="text"
                name="usermane"
                id="usermane"
                ring="1 black"
                border="none rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="font-bold text-xl">About</h2>

        <div class="grid md:grid-cols-2 gap-y-4 gap-x-8">
          <div class="flex-1">
            <div flex="~ col" class="space-y-2">
              <label for="Location">Location</label>
              <input
                type="text"
                name="location"
                id="Location"
                ring="1 black"
                border="none rounded-md"
              />
            </div>
          </div>
          <div class="flex-1">
            <div flex="~ col" class="space-y-2">
              <label for="portfolio">Personal site/portfolio</label>
              <input
                type="text"
                name="portfolio"
                id="portfolio"
                ring="1 black"
                border="none rounded-md"
                placeholder="https://"
              />
            </div>
          </div>
          <div class="flex-1">
            <div flex="~ col" class="space-y-2">
              <label for="Bio">Bio</label>
              <textarea
                name="bio"
                id="Bio"
                rows="5"
                ring="1 black"
                border="none rounded-md"
              ></textarea>
            </div>
          </div>
          <div class="flex-1">
            <div flex="~ col" class="space-y-2">
              <label for="tags">Interests(maximum 5)</label>
              <input
                type="text"
                name="tags"
                id="tags"
                ring="1 black"
                border="none rounded-md"
                placeholder="add a tag"
              />
              <p class="text-gray-400 text-sm">
                Your interests are generated from the types of photos you like,
                collect, and contribute.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="font-bold text-xl">Social</h2>
        <div class="grid md:grid-cols-2 gap-y-4 gap-x-8">
          <div class="flex-1">
            <div flex="~ col" class="space-y-2">
              <label for="Instagram">Instagram username</label>
              <input
                type="text"
                name="instagram"
                id="Instagram"
                ring="1 black"
                border="none rounded-md"
              />
              <p class="text-gray-400 text-sm">
                So that we can feature you on
                <a href="" title="Instagram link" class="underline"
                  >@unsplash</a
                >
              </p>
            </div>
          </div>
          <div class="flex-1">
            <div flex="~ col" class="space-y-2">
              <label for="Twitter">Twitter username</label>
              <input
                type="text"
                name="ywitter"
                id="Twitter"
                ring="1 black"
                border="none rounded-md"
                placeholder="https://"
              />
            </div>
          </div>
        </div>
      </section>

      <section p="t-4">
        <button
          type="submit"
          title="Update account"
          bg="hex-111111"
          w="full"
          p="2"
          text="white"
          border="none rounded-md"
        >
          Update
        </button>
      </section>
    </form>
  </div>
</template>