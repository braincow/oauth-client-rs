(function() {var implementors = {};
implementors["base64"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"base64/enum.DecodeError.html\" title=\"enum base64::DecodeError\">DecodeError</a>",synthetic:false,types:["base64::decode::DecodeError"]},];
implementors["failure"] = [{text:"impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"failure/struct.Compat.html\" title=\"struct failure::Compat\">Compat</a>&lt;E&gt;",synthetic:false,types:["failure::compat::Compat"]},];
implementors["futures"] = [{text:"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/future/struct.SharedError.html\" title=\"struct futures::future::SharedError\">SharedError</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>,&nbsp;</span>",synthetic:false,types:["futures::future::shared::SharedError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/stream/struct.ReuniteError.html\" title=\"struct futures::stream::ReuniteError\">ReuniteError</a>&lt;T&gt;",synthetic:false,types:["futures::stream::split::ReuniteError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/oneshot/struct.Canceled.html\" title=\"struct futures::sync::oneshot::Canceled\">Canceled</a>",synthetic:false,types:["futures::sync::oneshot::Canceled"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/mpsc/struct.SendError.html\" title=\"struct futures::sync::mpsc::SendError\">SendError</a>&lt;T&gt;",synthetic:false,types:["futures::sync::mpsc::SendError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/sync/mpsc/struct.TrySendError.html\" title=\"struct futures::sync::mpsc::TrySendError\">TrySendError</a>&lt;T&gt;",synthetic:false,types:["futures::sync::mpsc::TrySendError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"futures/unsync/mpsc/struct.SendError.html\" title=\"struct futures::unsync::mpsc::SendError\">SendError</a>&lt;T&gt;",synthetic:false,types:["futures::unsync::mpsc::SendError"]},];
implementors["httparse"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"httparse/enum.Error.html\" title=\"enum httparse::Error\">Error</a>",synthetic:false,types:["httparse::Error"]},];
implementors["hyper"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>",synthetic:false,types:["hyper::error::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"hyper/error/struct.UriError.html\" title=\"struct hyper::error::UriError\">UriError</a>",synthetic:false,types:["hyper::uri::UriError"]},];
implementors["language_tags"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"language_tags/enum.Error.html\" title=\"enum language_tags::Error\">Error</a>",synthetic:false,types:["language_tags::Error"]},];
implementors["mime"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"mime/struct.FromStrError.html\" title=\"struct mime::FromStrError\">FromStrError</a>",synthetic:false,types:["mime::FromStrError"]},];
implementors["native_tls"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"native_tls/struct.Error.html\" title=\"struct native_tls::Error\">Error</a>",synthetic:false,types:["native_tls::Error"]},{text:"impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"native_tls/enum.HandshakeError.html\" title=\"enum native_tls::HandshakeError\">HandshakeError</a>&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>",synthetic:false,types:["native_tls::HandshakeError"]},];
implementors["openssl"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"openssl/error/struct.ErrorStack.html\" title=\"struct openssl::error::ErrorStack\">ErrorStack</a>",synthetic:false,types:["openssl::error::ErrorStack"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"openssl/error/struct.Error.html\" title=\"struct openssl::error::Error\">Error</a>",synthetic:false,types:["openssl::error::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"openssl/ssl/enum.Error.html\" title=\"enum openssl::ssl::Error\">Error</a>",synthetic:false,types:["openssl::ssl::error::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"openssl/ssl/struct.RetryError.html\" title=\"struct openssl::ssl::RetryError\">RetryError</a>",synthetic:false,types:["openssl::ssl::error::RetryError"]},{text:"impl&lt;S:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"openssl/ssl/enum.HandshakeError.html\" title=\"enum openssl::ssl::HandshakeError\">HandshakeError</a>&lt;S&gt;",synthetic:false,types:["openssl::ssl::error::HandshakeError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"openssl/x509/struct.X509VerifyError.html\" title=\"struct openssl::x509::X509VerifyError\">X509VerifyError</a>",synthetic:false,types:["openssl::x509::X509VerifyError"]},];
implementors["rand"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"rand/jitter/enum.TimerError.html\" title=\"enum rand::jitter::TimerError\">TimerError</a>",synthetic:false,types:["rand::jitter::TimerError"]},];
implementors["rand_core"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"rand_core/struct.Error.html\" title=\"struct rand_core::Error\">Error</a>",synthetic:false,types:["rand_core::error::Error"]},];
implementors["reqwest"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"reqwest/struct.Error.html\" title=\"struct reqwest::Error\">Error</a>",synthetic:false,types:["reqwest::error::Error"]},];
implementors["ring"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"ring/error/struct.Unspecified.html\" title=\"struct ring::error::Unspecified\">Unspecified</a>",synthetic:false,types:["ring::error::Unspecified"]},];
implementors["serde"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"serde/de/value/struct.Error.html\" title=\"struct serde::de::value::Error\">Error</a>",synthetic:false,types:["serde::de::value::Error"]},];
implementors["serde_json"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"serde_json/error/struct.Error.html\" title=\"struct serde_json::error::Error\">Error</a>",synthetic:false,types:["serde_json::error::Error"]},];
implementors["serde_urlencoded"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"serde_urlencoded/ser/enum.Error.html\" title=\"enum serde_urlencoded::ser::Error\">Error</a>",synthetic:false,types:["serde_urlencoded::ser::Error"]},];
implementors["syn"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"syn/synom/struct.ParseError.html\" title=\"struct syn::synom::ParseError\">ParseError</a>",synthetic:false,types:["syn::error::ParseError"]},];
implementors["time"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"time/struct.OutOfRangeError.html\" title=\"struct time::OutOfRangeError\">OutOfRangeError</a>",synthetic:false,types:["time::duration::OutOfRangeError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"time/enum.ParseError.html\" title=\"enum time::ParseError\">ParseError</a>",synthetic:false,types:["time::ParseError"]},];
implementors["tokio_current_thread"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_current_thread/struct.RunError.html\" title=\"struct tokio_current_thread::RunError\">RunError</a>",synthetic:false,types:["tokio_current_thread::RunError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_current_thread/struct.RunTimeoutError.html\" title=\"struct tokio_current_thread::RunTimeoutError\">RunTimeoutError</a>",synthetic:false,types:["tokio_current_thread::RunTimeoutError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_current_thread/struct.TurnError.html\" title=\"struct tokio_current_thread::TurnError\">TurnError</a>",synthetic:false,types:["tokio_current_thread::TurnError"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_current_thread/struct.BlockError.html\" title=\"struct tokio_current_thread::BlockError\">BlockError</a>&lt;T&gt;",synthetic:false,types:["tokio_current_thread::BlockError"]},];
implementors["tokio_executor"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_executor/struct.EnterError.html\" title=\"struct tokio_executor::EnterError\">EnterError</a>",synthetic:false,types:["tokio_executor::enter::EnterError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_executor/struct.SpawnError.html\" title=\"struct tokio_executor::SpawnError\">SpawnError</a>",synthetic:false,types:["tokio_executor::SpawnError"]},];
implementors["tokio_reactor"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_reactor/struct.SetFallbackError.html\" title=\"struct tokio_reactor::SetFallbackError\">SetFallbackError</a>",synthetic:false,types:["tokio_reactor::SetFallbackError"]},];
implementors["tokio_threadpool"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_threadpool/park/struct.ParkError.html\" title=\"struct tokio_threadpool::park::ParkError\">ParkError</a>",synthetic:false,types:["tokio_threadpool::park::default_park::ParkError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_threadpool/struct.BlockingError.html\" title=\"struct tokio_threadpool::BlockingError\">BlockingError</a>",synthetic:false,types:["tokio_threadpool::blocking::BlockingError"]},];
implementors["tokio_timer"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_timer/timeout/struct.Error.html\" title=\"struct tokio_timer::timeout::Error\">Error</a>&lt;T&gt;",synthetic:false,types:["tokio_timer::timeout::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"tokio_timer/struct.Error.html\" title=\"struct tokio_timer::Error\">Error</a>",synthetic:false,types:["tokio_timer::error::Error"]},];
implementors["url"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"url/enum.ParseError.html\" title=\"enum url::ParseError\">ParseError</a>",synthetic:false,types:["url::parser::ParseError"]},];
implementors["uuid"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"uuid/enum.ParseError.html\" title=\"enum uuid::ParseError\">ParseError</a>",synthetic:false,types:["uuid::ParseError"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
