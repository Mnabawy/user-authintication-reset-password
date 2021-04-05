@component('mail::message')
# change password request

click the button below to change password


@component('mail::button',['url' => 'http://localhost:4200/response-password-reset?token'])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent