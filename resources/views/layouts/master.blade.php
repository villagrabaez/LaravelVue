
<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">
  @include('layouts.header')
<body class="hold-transition sidebar-mini">
<div class="wrapper" id="app">
  <App ruta="{{ route('basepath') }}"></App>
</div>
  @include('layouts.scripts')
</body>
</html>
