window.SIDEBAR_ITEMS = {"derive":[["Deref","Implements `Deref` for single-item structs. This is especially useful when utilizing the newtype pattern."],["DerefMut","Implements `DerefMut` for single-item structs. This is especially useful when utilizing the newtype pattern."],["TypeUlid","Derive macro for the `TypeUlid` trait."]],"enum":[["AudioEvent","An audio event that may be sent to the [`AudioEvents`] resource."],["Color","Color type."],["CoreStage","A [`StageLabel`] for the 5 core stages."],["EcsError","The types of errors used throughout the ECS."],["EulerRot","Euler rotation sequences."],["HexColorError","Error type for hex color decoding"],["KeyError","An error that may be caused when creating a [`Key`]."]],"fn":[["create_bitset","Creates a bitset big enough to contain the index of each entity. Mostly used to create caches."],["default","Free-standing, shorter equivalent to [`Default::default()`]."],["dmat2","Creates a 2x2 matrix from column vectors."],["dmat3","Creates a 3x3 matrix from column vectors."],["dmat4","Creates a 4x4 matrix from column vectors."],["dquat","Creates a quaternion from `x`, `y`, `z` and `w` values."],["dvec2","Creates a 2-dimensional vector."],["dvec3","Creates a 3-dimensional vector."],["dvec4","Creates a 4-dimensional vector."],["ivec2","Creates a 2-dimensional vector."],["ivec3","Creates a 3-dimensional vector."],["ivec4","Creates a 4-dimensional vector."],["mat2","Creates a 2x2 matrix from column vectors."],["mat3","Creates a 3x3 matrix from column vectors."],["mat3a","Creates a 3x3 matrix from column vectors."],["mat4","Creates a 4x4 matrix from column vectors."],["quat","Creates a quaternion from `x`, `y`, `z` and `w` values."],["uvec2","Creates a 2-dimensional vector."],["uvec3","Creates a 3-dimensional vector."],["uvec4","Creates a 4-dimensional vector."],["vec2","Creates a 2-dimensional vector."],["vec3","Creates a 3-dimensional vector."],["vec3a","Creates a 3-dimensional vector."],["vec4","Creates a 4-dimensional vector."]],"macro":[["bitor","Shorthand for combining bitsets with bit_or."],["bitset","Shorthand for setting bits on the bitset container."],["impl_bitset","Implements the `BitSet` trait members for your type through `DerefMut`."],["key","Create a new const [`Key`][datatypes] parsed at compile time."]],"struct":[["Affine2","A 2D affine transform, which can represent translation, rotation, scaling and shear."],["Affine3A","A 3D affine transform, which can represent translation, rotation, scaling and shear."],["AssetPath","A path to an asset."],["AssetProviderMut","A mutable borrow of an [`AssetProvider`]."],["AssetProviderRef","A borrow of an [`AssetProvider`]."],["AssetProviders","A resource that may be used to access [`AssetProvider`]s for all the different registered asset types."],["AssetProvidersResource","The type of the [`AssetProviders`] resource."],["Atlas","An atlas image asset type, contains no data, but [`Handle<Atlas>`] is still useful becaause it uniquely represents an atlas asset that may be rendered outside of the core."],["AtlasSprite","An animated sprite component."],["AtomicComponentStore","A typed, wrapper handle around [`UntypedComponentStore`] that is runtime borrow checked and can be cheaply cloned. Think can think of it like an `Arc<RwLock<ComponentStore>>`."],["AtomicComponentStoreRef","A read-only borrow of [`AtomicComponentStore`]."],["AtomicComponentStoreRefMut","A mutable borrow of [`AtomicComponentStore`]."],["AtomicRef","A wrapper type for an immutably borrowed value from an `AtomicRefCell<T>`."],["AtomicRefCell","A threadsafe analogue to RefCell."],["AtomicRefMut","A wrapper type for a mutably borrowed value from an `AtomicRefCell<T>`."],["AtomicResource","A handle to a resource from a [`Resources`] collection."],["AudioEvents","Resource containing the audio event queue."],["AudioSource","The audio source asset type, contains no data, but [`Handle<AudioSource>`] is still useful because it uniquely represents a sound/music that may be played outside of bones."],["BVec2","A 2-dimensional `bool` vector mask."],["BVec3","A 3-dimensional `bool` vector mask."],["BVec3A","A 3-dimensional SIMD vector mask."],["BVec4","A 4-dimensional `bool` vector mask."],["BVec4A","A 4-dimensional SIMD vector mask."],["BitFmt","BitSet formatter."],["BitSetVec","The type of bitsets used to track entities in component storages. Mostly used to create caches."],["BorrowError","An error returned by `AtomicRefCell::try_borrow`."],["BorrowMutError","An error returned by `AtomicRefCell::try_borrow_mut`."],["Camera","Makes an entity behave like a camera."],["ClearColor","Resource for controlling the clear color."],["CommandQueue","A resource containing the [`Commands`] command queue."],["Commands","A [`SystemParam`] that can be used to schedule systems that will be run at the end of the current [`SystemStage`]."],["ComponentBitsetIterator","Read-only iterator over components matching a given bitset"],["ComponentBitsetIteratorMut","Mutable iterator over components matching a given bitset"],["ComponentStore","A typed wrapper around [`UntypedComponentStore`]."],["ComponentStores","A collection of [`ComponentStore<T>`]."],["DAffine2","A 2D affine transform, which can represent translation, rotation, scaling and shear."],["DAffine3","A 3D affine transform, which can represent translation, rotation, scaling and shear."],["DMat2","A 2x2 column major matrix."],["DMat3","A 3x3 column major matrix."],["DMat4","A 4x4 column major matrix."],["DQuat","A quaternion representing an orientation."],["DVec2","A 2-dimensional vector."],["DVec3","A 3-dimensional vector."],["DVec4","A 4-dimensional vector."],["Entities","Holds a list of alive entities."],["EntitiesIterWith","Iterator over entities returned by [`Entities::iter_with`]."],["Entity","An entity index."],["EntityIterator","Iterator over entities using the provided bitset."],["Handle","A typed handle to an asset."],["IVec2","A 2-dimensional vector."],["IVec3","A 3-dimensional vector."],["IVec4","A 4-dimensional vector."],["Image","Image asset type, contains no data, but [`Handle<Image>`] is still useful because it uniquely represents an image that may be rendered outside of the core."],["Key","A small ascii byte array stored on the stack and used similarly to a string to represent things like animation keys, etc, without requring a heap allocation."],["Mat2","A 2x2 column major matrix."],["Mat3","A 3x3 column major matrix."],["Mat3A","A 3x3 column major matrix."],["Mat4","A 4x4 column major matrix."],["Path2d","A component for rendering a 2D line path, made up of a list of straight line segments."],["Quat","A quaternion representing an orientation."],["Res","[`SystemParam`] for getting read access to a resource."],["ResMut","[`SystemParam`] for getting mutable access to a resource."],["Resources","A collection of resources."],["SimpleSystemStage","A collection of systems that will be run in order."],["Sprite","A 2D sprite component"],["System","Struct used to run a system function using the world."],["SystemStages","An ordered collection of [`SystemStage`]s."],["Tile","A tilemap tile component."],["TileLayer","A tilemap layer component."],["Transform","The main transform component."],["TypedComponentOps","Implements typed operations on top of a [`UntypedComponentStore`]."],["UVec2","A 2-dimensional vector."],["UVec3","A 3-dimensional vector."],["UVec4","A 4-dimensional vector."],["Ulid","A Ulid is a unique 128-bit lexicographically sortable identifier"],["UntypedComponentBitsetIterator","Iterates over components using a provided bitset. Each time the bitset has a 1 in index i, the iterator will fetch data from the storage at index i and return it."],["UntypedComponentBitsetIteratorMut","Iterates over components using a provided bitset. Each time the bitset has a 1 in index i, the iterator will fetch data from the storage at index i."],["UntypedComponentStore","Holds components of a given type indexed by `Entity`."],["UntypedHandle","An untyped handle to an asset."],["UntypedResource","An untyped resource that may be inserted into [`UntypedResources`]."],["UntypedResourceInfo","Used to construct an [`UntypedResource`]."],["UntypedResources","Storage for un-typed resources."],["Vec2","A 2-dimensional vector."],["Vec3","A 3-dimensional vector."],["Vec3A","A 3-dimensional vector with SIMD support."],["Vec4","A 4-dimensional vector with SIMD support."],["Viewport","A custom viewport specification for a [`Camera`]."],["World","The [`World`] is simply a collection of [`Resources`], and [`ComponentStores`]."]],"trait":[["AssetProvider","Trait for asset providers."],["BitSet","The BitSet API."],["EcsData","Helper trait that is auto-implemented for anything that may be stored in the ECS’s untyped storage."],["FromWorld","Creates an instance of the type this trait is implemented for using data from the supplied [`World`]."],["IntoSystem","Converts a function into a [`System`]."],["QueryItem","A type representing a component-joining entity query."],["RawFns","Helper trait that is auto-implemented for all `Clone`-able types. Provides easy access to drop and clone funcitons for raw pointers."],["StageLabel","Trait for things that may be used to identify a system stage."],["SystemParam","Trait used to implement parameters for [`System`] functions."],["SystemStage","Trait for system stages. A stage is a"],["TypeUlid","Associates a [`Ulid`] ID to a Rust type."],["TypedEcsData","Helper trait that is auto-implemented for anything that may be stored in the ECS’s typed storage."],["UntypedAssetProvider","Trait implemented for asset providers that can return untyped pointers to their assets."],["UnwrapMany","Helper trait for unwraping each item in an array."],["Vec2Swizzles",""],["Vec3Swizzles",""],["Vec4Swizzles",""]],"type":[["Comp","[`SystemParam`] for getting read access to a [`ComponentStore`]."],["CompMut","[`SystemParam`] for getting mutable access to a [`ComponentStore`]."],["ResAssetProviders","Type alias for getting the [`AssetProviders`] resource."],["SystemResult","The result of a `System`’s execution."],["UlidMap","Faster hash map using [`FxHashMap`] and a ULID key."]]};