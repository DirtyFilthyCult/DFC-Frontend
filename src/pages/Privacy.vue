<template>
  <main>
    <div class="index-block">
      <div class="index-block-text-full">
        <h1 class="novecento heading">
          privacy policy</h1>
        <p class="fira description">Last updated: 8:26 PM EST, Mar 10, 2021; Rev. 1</p>
        <hr class="large-rule">
        <h2 class="novecento heading-small">introduction</h2>
        <p class="fira description">
          In the DFC, the secure and ethical handling of your personal data is taken very seriously. That's why all of your
          personally identifiable data that we process is never sold or transferred. This privacy policy provides an
          in-depth view of the information that you provide us and what it is used for.
        </p>
        <hr class="small-rule">
        <h2 class="novecento heading-small">external identifiers</h2>
        <p class="fira description">
          External identifiers are user IDs that have been provided to us by other services. The DFC makes use of your
          Discord identifier when you join our Discord server, as well as your Steam identifier when you pair your
          account with OpenID. In both of these cases, the DFC can <strong>NOT</strong> gain access to your login
          credentials; your login information is handled independently by these services.
        </p>
        <hr class="small-rule">
        <h2 class="novecento heading-small">random identifiers</h2>
        <p class="fira description">
          Random identifiers, also known as UUIDs (universally unique identifiers), are randomly-generated strings that are
          used to identify your session when we communicate with other services. Due to their random nature, they cannot
          be used to identify you outside of our servers. These services include:
        </p>
        <dl class="fira description">
          <dt>Steam</dt>
          <dd>We use a service provided by Steam called
            <a href="https://steamcommunity.com/dev" target="_blank" style="color:white;">OpenID</a>,
            which allows us to validate the ownership of your Steam account by securely retrieving your Steam identifier.
            A UUID is generated, paired to you, shared with Steam, and finally encoded in a return URL to identify your return.
          </dd>
          <dt>Discord</dt>
          <dd>To enable users to log in on our website, we use a service called
            <a href="https://discord.com/developers/docs/topics/oauth2" target="_blank" style="color: white;">OAuth2</a>.
            This allows us to create an authentication session with Discord, and uses a random UUID in a method similar to
            Steam's OpenID.
          </dd>
        </dl>
        <hr class="small-rule">
        <h2 class="novecento heading-small">ip address</h2>
        <p class="fira description">
          Your IP address is only temporarily logged - but never saved - in the rare case of server maintenance on the DFC's
          web backend. By temporarily logging the IP address and other data from each web request, this allows us to debug
          our systems more effectively. Such maintenance will always be publicly announced, at which you point you have the
          right to refuse to use our services if you do not wish for your IP address to be temporarily logged.
        </p>
        <hr class="small-rule">
        <h2 class="novecento heading-small">steam integration</h2>
        <p class="fira description">
          Parts of the DFC website and Discord bot are integrated with Steam, allowing us to track our group progress on
          Steam's public leaderboards. To do this, members are encouraged - but not required - to link their Steam accounts
          to their DFC accounts using OpenID. This process does <strong>NOT</strong> expose the DFC to your Steam login
          credentials; the only data we are able to access and verify is your public Steam ID.
        </p>
        <p class="fira description">
          Once your Steam account has been linked, we query Steam's web API with your Steam ID to receive some information
          about your Steam profile. You are in full control over what information we can process; Steam's web API respects
          the public privacy settings set on your Steam profile as a normal user would. The information we collect from
          Steam currently includes your display name and avatar URL.
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Privacy",
}
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 2rem;
  width: 100%;
}
</style>