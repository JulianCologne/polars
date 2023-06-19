(function() {var implementors = {
"hashbrown":[["impl&lt;T, S&gt; <a class=\"trait\" href=\"rayon/iter/trait.FromParallelIterator.html\" title=\"trait rayon::iter::FromParallelIterator\">FromParallelIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, Global&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl&lt;K, V, S&gt; <a class=\"trait\" href=\"rayon/iter/trait.FromParallelIterator.html\" title=\"trait rayon::iter::FromParallelIterator\">FromParallelIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, Global&gt;<span class=\"where fmt-newline\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"]],
"polars":[],
"polars_core":[["impl <a class=\"trait\" href=\"rayon/iter/trait.FromParallelIterator.html\" title=\"trait rayon::iter::FromParallelIterator\">FromParallelIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.BooleanChunked.html\" title=\"type polars_core::datatypes::BooleanChunked\">BooleanChunked</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"rayon/iter/trait.FromParallelIterator.html\" title=\"trait rayon::iter::FromParallelIterator\">FromParallelIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;T as <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>&gt;::<a class=\"associatedtype\" href=\"polars_core/datatypes/trait.PolarsNumericType.html#associatedtype.Native\" title=\"type polars_core::datatypes::PolarsNumericType::Native\">Native</a>&gt;&gt; for <a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>,</span>"],["impl&lt;Ptr&gt; <a class=\"trait\" href=\"rayon/iter/trait.FromParallelIterator.html\" title=\"trait rayon::iter::FromParallelIterator\">FromParallelIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.Utf8Chunked.html\" title=\"type polars_core::datatypes::Utf8Chunked\">Utf8Chunked</a><span class=\"where fmt-newline\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"],["impl <a class=\"trait\" href=\"rayon/iter/trait.FromParallelIterator.html\" title=\"trait rayon::iter::FromParallelIterator\">FromParallelIterator</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;)&gt; for <a class=\"struct\" href=\"polars_core/frame/groupby/struct.GroupsIdx.html\" title=\"struct polars_core::frame::groupby::GroupsIdx\">GroupsIdx</a>"],["impl&lt;Ptr&gt; <a class=\"trait\" href=\"rayon/iter/trait.FromParallelIterator.html\" title=\"trait rayon::iter::FromParallelIterator\">FromParallelIterator</a>&lt;Ptr&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.Utf8Chunked.html\" title=\"type polars_core::datatypes::Utf8Chunked\">Utf8Chunked</a><span class=\"where fmt-newline\">where\n    Ptr: <a class=\"trait\" href=\"polars_core/chunked_array/upstream_traits/trait.PolarsAsRef.html\" title=\"trait polars_core::chunked_array::upstream_traits::PolarsAsRef\">PolarsAsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</span>"],["impl <a class=\"trait\" href=\"rayon/iter/trait.FromParallelIterator.html\" title=\"trait rayon::iter::FromParallelIterator\">FromParallelIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"polars_core/series/struct.Series.html\" title=\"struct polars_core::series::Series\">Series</a>&gt;&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.ListChunked.html\" title=\"type polars_core::datatypes::ListChunked\">ListChunked</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"rayon/iter/trait.FromParallelIterator.html\" title=\"trait rayon::iter::FromParallelIterator\">FromParallelIterator</a>&lt;&lt;T as <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>&gt;::<a class=\"associatedtype\" href=\"polars_core/datatypes/trait.PolarsNumericType.html#associatedtype.Native\" title=\"type polars_core::datatypes::PolarsNumericType::Native\">Native</a>&gt; for <a class=\"struct\" href=\"polars_core/utils/struct.NoNull.html\" title=\"struct polars_core::utils::NoNull\">NoNull</a>&lt;<a class=\"struct\" href=\"polars_core/chunked_array/struct.ChunkedArray.html\" title=\"struct polars_core::chunked_array::ChunkedArray\">ChunkedArray</a>&lt;T&gt;&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a>,</span>"],["impl <a class=\"trait\" href=\"rayon/iter/trait.FromParallelIterator.html\" title=\"trait rayon::iter::FromParallelIterator\">FromParallelIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;&gt; for <a class=\"type\" href=\"polars_core/datatypes/type.BooleanChunked.html\" title=\"type polars_core::datatypes::BooleanChunked\">BooleanChunked</a>"]],
"rayon":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()